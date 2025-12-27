// Base URL for all backend API calls
// const API_URL = "http://localhost:8080/api/foods";
const API_URL = "https://food-menu-backend-d53o.onrender.com/api/foods";


// Toggle between dark and light theme and persist choice
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');

    // Save the current theme preference to localStorage
    const isLightTheme = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Open selected tab and refresh menu when View tab is opened
function openTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active-content');
    });

    // Deactivate all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active-content');

    // Activate the clicked button
    const clickedButton = document.querySelector(`.tab-btn[onclick="openTab('${tabId}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // If "View Menu" tab is opened, refresh the food list
    if (tabId === 'view-tab') {
        loadFoods();
    }
}
// Page load par sab items load karo + button listener
window.onload = () => {
    // Check for saved theme preference and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Initialize the first tab (Add Item)
    openTab('add-tab'); 

    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addFood);
    
    // Theme toggle button listener
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    themeToggleBtn.addEventListener("click", toggleTheme);
};

// Food list load karna
// Fetch all food items from backend and render cards in the UI
async function loadFoods() {
    try {
        const response = await fetch(API_URL);
        const foods = await response.json();

        const list = document.getElementById("food-list");
        list.innerHTML = "";

        if (!Array.isArray(foods) || foods.length === 0) {
                list.innerHTML = "<p>No food items available. Add something from the Add tab.</p>";
                return;
            }

        foods.forEach(item => {
            const card = document.createElement("div");
            card.className = "food-card";

            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: ₹${Number(item.price).toFixed(2)}</p>
                <p>Category: ${item.category}</p>
                <p>Type: ${item.type}</p>
                <button class="delete-btn" onclick="deleteFood(${item.id})" title="Delete Item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-.71-.71c-.18-.18-.44-.29-.71-.29H9.92c-.27 0-.53.11-.71.29l-.71.71H4v2h16V4h-4.5z"/>
                    </svg>
                </button>
            `;

            list.appendChild(card);
        });
    } catch (error) {
        console.error("Error while loading foods:", error);
        alert("Failed to load food items from server.");
    }
}

// New food add karna
// Read form inputs and send POST request to backend
async function addFood() {
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const categorySelect = document.getElementById("category");
    const typeSelect = document.getElementById("type");

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const category = categorySelect.value;
    const type = typeSelect.value;

    if (!name || isNaN(price)) {
        alert("Please enter a valid name and price.");
        return;
    }

    const newFood = {
        name: name,
        price: price,
        category: category,
        type: type
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFood)
        });

        if (!response.ok) {
            alert("Failed to add food item.");
            return;
        }

        nameInput.value = "";
        priceInput.value = "";
        categorySelect.value = "Starter";
        typeSelect.value = "VEG";

        // After adding, switch to View Menu tab to see the new item
        openTab('view-tab');
    } catch (error) {
        console.error("Error while adding food:", error);
        alert("Something went wrong while adding the food item.");
    }
}

// Food delete karna
// Send DELETE request to backend and refresh the list
async function deleteFood(id) {
    if (!confirm("Are you sure you want to delete this item?")) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (response.status === 204) {
            loadFoods();
        } else if (response.status === 404) {
            alert("Item not found on server.");
        } else {
            alert("Failed to delete food item.");
        }
    } catch (error) {
        console.error("Error while deleting food:", error);
        alert("Something went wrong while deleting the food item.");
    }
}