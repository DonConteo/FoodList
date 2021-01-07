package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index(@AuthenticationPrincipal User user, Model model){
        model.addAttribute("title", "Главная страница");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "/home";
        }
        model.addAttribute("user", "Гость");
        return "/home";
    }

    @GetMapping("/home")
    public String home(@AuthenticationPrincipal User user, Model model){
        model.addAttribute("title", "Главная страница");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "/home";
        }
        model.addAttribute("user", "Гость");
        return "/home";
    }

    @GetMapping("/login")
    public String login() {
        return "/login";
    }
}