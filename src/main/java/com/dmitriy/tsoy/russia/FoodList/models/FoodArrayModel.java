package com.dmitriy.tsoy.russia.FoodList.models;

import javax.persistence.*;

@Entity
@Table(name = "food_array_model")
public class FoodArrayModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String type, name, image;
    private int calories;

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getCalories() {
        return calories;
    }
    public void setCalories(int calories) {
        this.calories = calories;
    }
}
