package com.dmitriy.tsoy.russia.FoodList.controllers;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import com.dmitriy.tsoy.russia.FoodList.models.Reciepe;
import com.dmitriy.tsoy.russia.FoodList.repo.ReciepeRepo;
import com.dmitriy.tsoy.russia.FoodList.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.ArrayList;

@Controller
public class RecipesController {

    private final ReciepeRepo reciepeRepo;
    private final UserRepo userRepo;

    @Autowired
    public RecipesController(ReciepeRepo reciepeRepo, UserRepo userRepo){
        this.reciepeRepo = reciepeRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/recipes")
    public String recipesView(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("title", "Рецепты");
        model.addAttribute("reciepes", reciepeRepo.getRecipesForUser(user.getId()));
        model.addAttribute("user", user.getUsername());
        return "recipes";
    }

    @GetMapping("/recipes/{id}")
    public String recipeDetails(@AuthenticationPrincipal User user, @PathVariable(value="id") long id, Model model) {
        model.addAttribute("title", "Рецепт");
        if(!reciepeRepo.existsById(id)){
            return "redirect:/home";
        }
        ArrayList<Reciepe> result = new ArrayList<>();
        reciepeRepo.findById(id).ifPresent(result::add);
        model.addAttribute("reciepe", result);
        model.addAttribute("user", user.getUsername());
        return "reciepeDetails";
    }

    @PostMapping("/recipes/{id}/remove")
    public String recipeDelete(@AuthenticationPrincipal User user, @PathVariable(value="id") long id, Model model) {
        reciepeRepo.delete(reciepeRepo.findById(id).orElseThrow());
        Iterable<Reciepe> recipes = reciepeRepo.getRecipesForUser(user.getId());
        if(user != null){
            model.addAttribute("reciepes", recipes);
            model.addAttribute("user", user.getUsername());
            return "recipes";
        }
        return "redirect:/recipes";
    }
}