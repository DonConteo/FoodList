package com.dmitriy.tsoy.russia.FoodList.repo;

import com.dmitriy.tsoy.russia.FoodList.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String name);
}
