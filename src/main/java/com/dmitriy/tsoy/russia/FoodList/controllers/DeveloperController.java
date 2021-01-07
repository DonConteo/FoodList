package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 *
 */
@Controller
public class DeveloperController {

    @GetMapping("/developer")
    public String developerView(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("title", "Связь с разработчиком");
        if(user != null){
            model.addAttribute("user", user.getUsername());
            return "developer";
        }
        model.addAttribute("user", "Гость");
        return "developer";
    }

//    @GetMapping("/developer")
//    public String developerView(Model model) {
//        model.addAttribute("title", "Связь с разработчиком");
//        model.addAttribute("user", "Гость");
//        return "developer";
//    }
}
