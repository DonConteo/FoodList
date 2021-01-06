package com.dmitriy.tsoy.russia.FoodList.models;

import com.dmitriy.tsoy.russia.FoodList.domain.User;

import javax.persistence.*;

@Entity
@Table(name = "reciepes_model")
public class Reciepe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String reciepe;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    private String info;
    private int weight, calories;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getReciepe() {
        return reciepe;
    }
    public void setReciepe(String reciepe) {
        this.reciepe = reciepe;
    }

    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getCalories() {
        return calories;
    }
    public void setCalories(int calories) {
        this.calories = calories;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public String getInfo() {
        return info;
    }
    public void setInfo(String info) {
        this.info = info;
    }

    public Reciepe() {
    }

    public Reciepe(String name, String reciepe, int weight, int calories, String info, User user) {
        this.name = name;
        this.reciepe = reciepe;
        this.weight = weight;
        this.calories = calories;
        this.info = info;
        this.user = user;
    }
}
