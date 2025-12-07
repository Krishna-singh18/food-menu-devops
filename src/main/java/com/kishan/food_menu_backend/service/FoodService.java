package com.kishan.food_menu_backend.service;

import com.kishan.food_menu_backend.model.FoodItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class FoodService {

    private final List<FoodItem> foodItems = new ArrayList<>();
    private int currentId = 1;

    public FoodService() {
        // Initial sample data (so frontend ko kuch dikh jaye by default)
        foodItems.add(new FoodItem(currentId++, "Paneer Tikka", 150.0, "Starter", "VEG"));
        foodItems.add(new FoodItem(currentId++, "Chicken Biryani", 220.0, "Main Course", "NON_VEG"));
        foodItems.add(new FoodItem(currentId++, "Gulab Jamun", 80.0, "Dessert", "VEG"));
    }

    // Get all food items
    public List<FoodItem> getAllFoodItems() {
        return foodItems;
    }

    // Add new food item
    public FoodItem addFoodItem(FoodItem item) {
        // agar id 0 hai to hum khud assign karenge
        item.setId(currentId++);
        foodItems.add(item);
        System.out.println("Added food item: " + item);
        return item;
    }

    // Delete food item by id (true if deleted, false if not found)
    public boolean deleteFoodItem(int id) {
        Iterator<FoodItem> iterator = foodItems.iterator();
        while (iterator.hasNext()) {
            FoodItem item = iterator.next();
            if (item.getId() == id) {
                System.out.println("Removing food item: " + item);
                iterator.remove();
                return true;
            }
        }
        System.out.println("Food item with id " + id + " not found.");
        return false;
    }
}
