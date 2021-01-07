package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import com.dmitriy.tsoy.russia.FoodList.models.Reciepe;
import com.dmitriy.tsoy.russia.FoodList.repo.FoodArrayRepo;
import com.dmitriy.tsoy.russia.FoodList.repo.ReciepeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class FoodArrayController {

    private final FoodArrayRepo foodArrayRepo;
    private final ReciepeRepo reciepeRepo;

    @Autowired
    public FoodArrayController(FoodArrayRepo foodArrayRepo, ReciepeRepo reciepeRepo){
        this.foodArrayRepo = foodArrayRepo;
        this.reciepeRepo = reciepeRepo;
    }

    @GetMapping("/foodArray")
    public String FoodArray(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("food", foodArrayRepo.findAll());
        model.addAttribute("title", "Список продуктов");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "foodArray";
        }
        model.addAttribute("user", "Гость");
        return "foodArray";
    }

    @PostMapping(value = "/foodArray", consumes = {"application/x-www-form-urlencoded"})
    public String recipeAdd(@AuthenticationPrincipal User user,
                                            @RequestParam(required = true) String name,
                                            @RequestParam(required = true) String reciepe,
                                            @RequestParam(required = true) int weight,
                                            @RequestParam(required = true) int calories,
                                            @RequestParam(required = true) String info){
        reciepeRepo.save(new Reciepe(name, reciepe, weight, calories, info, user));
        return "redirect:/foodArray";
    }
}

