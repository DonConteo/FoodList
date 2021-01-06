package com.dmitriy.tsoy.russia.FoodList.domain;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;

public class RegistrationForm {

    private String username;
    private String password;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public User toUser(PasswordEncoder passwordEncoder){
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRoles(Collections.singleton(Role.USER));
        return user;
    }
}
