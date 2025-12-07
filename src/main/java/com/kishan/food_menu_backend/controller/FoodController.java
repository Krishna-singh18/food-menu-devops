package com.kishan.food_menu_backend.controller;

import com.kishan.food_menu_backend.model.FoodItem;
import com.kishan.food_menu_backend.service.FoodService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "*") // allow requests from any frontend (later frontend se call karenge)
public class FoodController {

    private final FoodService foodService;

    // Constructor injection (recommended way)
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    // GET /api/foods -> return all food items
    @GetMapping
    public List<FoodItem> getAllFoods() {
        return foodService.getAllFoodItems();
    }

    // POST /api/foods -> add new food item
    @PostMapping
    public FoodItem addFood(@RequestBody FoodItem item) {
        return foodService.addFoodItem(item);
    }

    // DELETE /api/foods/{id} -> delete food by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable int id) {
        boolean deleted = foodService.deleteFoodItem(id);
        if (deleted) {
            return ResponseEntity.noContent().build(); // 204
        } else {
            return ResponseEntity.notFound().build(); // 404
        }
    }
}
