package com.kishan.food_menu_backend.model;

public class FoodItem {

    private int id;
    private String name;
    private double price;
    private String category; // Starter / Main / Dessert / Drinks
    private String type;     // VEG / NON_VEG

    // Default constructor (for JSON)
    public FoodItem() {
    }

    // Parameterized constructor
    public FoodItem(int id, String name, double price, String category, String type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.type = type;
    }

    // ----- Getters & Setters -----

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    // To print FoodItem nicely in logs
    @Override
    public String toString() {
        return "FoodItem{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
