package com.dmitriy.tsoy.russia.FoodList.repo;

import com.dmitriy.tsoy.russia.FoodList.models.FoodArrayModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodArrayRepo extends JpaRepository<FoodArrayModel, Long> {
}
