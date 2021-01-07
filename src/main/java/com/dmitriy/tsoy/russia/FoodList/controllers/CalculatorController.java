package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import com.dmitriy.tsoy.russia.FoodList.models.Reciepe;
import com.dmitriy.tsoy.russia.FoodList.repo.FoodArrayRepo;
import com.dmitriy.tsoy.russia.FoodList.repo.ReciepeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {

    private final FoodArrayRepo foodArrayRepo;
    private final ReciepeRepo reciepeRepo;

    @Autowired
    public CalculatorController(FoodArrayRepo foodArrayRepo, ReciepeRepo reciepeRepo){
        this.foodArrayRepo = foodArrayRepo;
        this.reciepeRepo = reciepeRepo;
    }

    @GetMapping("/calculator")
    public String calculator(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("title", "Калькулятор");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "calculator";
        }
        model.addAttribute("user", "Гость");
        return "calculator";
    }

    @PostMapping(value = "/calculator", consumes = {"application/x-www-form-urlencoded"})
    public String recipeAdd(@AuthenticationPrincipal User user,
                            @RequestParam(required = true) String name,
                            @RequestParam(required = true) String reciepe,
                            @RequestParam(required = true) int weight,
                            @RequestParam(required = true) int calories,
                            @RequestParam(required = true) String info){
        reciepeRepo.save(new Reciepe(name, reciepe, weight, calories, info, user));
        return "redirect:/calculator";
    }
}
