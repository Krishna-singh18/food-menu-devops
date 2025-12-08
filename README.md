![Build](https://img.shields.io/github/actions/workflow/status/Krishna-singh18/food-menu-devops/maven-ci.yml?label=CI%20Build&logo=github)
![Java](https://img.shields.io/badge/Java-17-orange?logo=java)
![Spring](https://img.shields.io/badge/SpringBoot-3.x-green?logo=springboot)

# 🍽️ Food Menu DevOps – Full Stack Web Application

An **Online Food Menu Management System** built as a DevOps-oriented project using:

- **Spring Boot + Maven** for backend REST APIs  
- **HTML, CSS, JavaScript** for a modern, tab-based frontend  
- **Git, GitHub & GitHub Actions** for version control and CI automation

This project demonstrates a complete DevOps pipeline, clean backend architecture, and a lightweight frontend consuming REST APIs.

---

## 📸 Screenshot  
All screenshots are available in the folder below:

👉 **[Click here to view all Screenshots](docs/screenshots/)**  

---

## 🚀 Overview

This project allows a restaurant/canteen owner to manage a simple online food menu.

The user can:

- Add new food items with **name, price, category, and type (VEG / NON_VEG)**
- View all items in a **card-based UI**
- Delete items from the menu
- Switch between **Dark and Light theme**
- Use a **tabbed interface** – one tab for adding items, another for viewing menu

---

## 🧩 Features

### ✅ Backend (Spring Boot + Maven)

- REST APIs built using **Spring Boot**
- `FoodItem` model with:
  - `id` (auto-increment)
  - `name`
  - `price`
  - `category` (Starter / Main Course / Dessert / Drinks)
  - `type` (VEG / NON_VEG)
- In-memory storage using `List<FoodItem>` (no external DB required)
- Pre-loaded sample items for quick demo
- Clean separation:
  - `model` → Data structure
  - `service` → Business logic
  - `controller` → REST endpoints

### ✅ Frontend (HTML + CSS + JavaScript)

- Tab-based layout:
  - **Add Item** tab – form for adding new menu items
  - **View Menu** tab – responsive cards showing all food items
- Modern UI with:
  - Dark / Light theme toggle (saved in `localStorage`)
  - Clean typography and simple cards
  - Delete icons on each card
- JavaScript uses `fetch()` to call backend APIs:
  - Load menu on “View Menu” tab
  - Add item via POST
  - Delete item via DELETE

### ✅ DevOps

- Project tracked with **Git**
- Remote repository hosted on **GitHub**
- **GitHub Actions (Maven CI)** workflow:
  - Runs on every push / pull request to `main`
  - Sets up JDK 17
  - Runs `mvn -B clean verify`
  - Shows build status (✅/❌) on GitHub



---

## 🛠️ Tech Stack

| Layer     | Technology |
|-----------|------------|
| Backend   | Java 17, Spring Boot, Maven |
| Frontend  | HTML5, CSS3, JavaScript |
| DevOps    | Git, GitHub, GitHub Actions |
| Tools     | VS Code, Postman |  

---

## 📂 Project Structure

```
food-menu-devops/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/kishan/food_menu_backend/
│       │       ├── FoodMenuBackendApplication.java
│       │       ├── model/
│       │       │   └── FoodItem.java
│       │       ├── service/
│       │       │   └── FoodService.java
│       │       └── controller/
│       │           ├── HelloController.java
│       │           └── FoodController.java
│       └── resources/
│           └── application.properties (if needed)
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .github/
│   └── workflows/
│       └── maven-ci.yml
├── pom.xml
└── .gitignore
```

---

## 🔗 REST API Endpoints

Base URL:
```
http://localhost:8080
```

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | `/api/hello`      | Test endpoint              |
| GET    | `/api/foods`      | Get all food items         |
| POST   | `/api/foods`      | Add a new food item (JSON) |
| DELETE | `/api/foods/{id}` | Delete food item by ID     |

### Sample POST body

```json
{
  "name": "Cold Coffee",
  "price": 120.0,
  "category": "Drinks",
  "type": "VEG"
}
```

---

## 🏃‍♂️ How to Run the Project

### 1️⃣ Backend (Spring Boot)

**Prerequisites:**  
Java 17+, Maven

**Steps:**
```bash
cd food-menu-devops
mvn clean verify
mvn spring-boot:run
```

API Test URLs:
```
http://localhost:8080/api/hello
http://localhost:8080/api/foods
```

---

### 2️⃣ Frontend (HTML/CSS/JS)

- Open `frontend/index.html` in browser  
OR  
- Use VS Code Live Server

---

## 🧪 CI with GitHub Actions

Workflow file:
```
.github/workflows/maven-ci.yml
```

CI executes on every push/PR:

- Checkout code  
- Setup JDK 17  
- Run:

```bash
mvn -B clean verify
```

Build status visible in GitHub **Actions** tab.

---

## 🎯 Summary

A complete **DevOps + Full Stack** project demonstrating:  
✔ REST API development  
✔ Frontend integration  
✔ Git version control  
✔ CI automation using GitHub Actions  
✔ Clean architecture + readable code  
