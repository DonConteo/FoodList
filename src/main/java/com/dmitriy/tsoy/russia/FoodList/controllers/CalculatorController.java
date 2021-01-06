package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import com.dmitriy.tsoy.russia.FoodList.models.FoodArrayModel;
import com.dmitriy.tsoy.russia.FoodList.repo.FoodArrayRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class CalculatorController {

    @Autowired
    private FoodArrayRepo foodArrayRepo;

    @GetMapping("/calculator")
    public String calculator(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("title", "Главная страница");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "calculator";
        }
        model.addAttribute("user", "Гость");
        return "calculator";
    }
}
