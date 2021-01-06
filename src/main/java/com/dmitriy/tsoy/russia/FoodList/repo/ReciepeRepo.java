package com.dmitriy.tsoy.russia.FoodList.repo;

import com.dmitriy.tsoy.russia.FoodList.models.Reciepe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ReciepeRepo extends JpaRepository<Reciepe, Long> {

    @Modifying
    @Transactional
    @Query(value = "select * from reciepes_model as r where r.user_id=:user_id", nativeQuery = true)
    Iterable<Reciepe> getRecipesForUser(@Param("user_id") long id);

}
