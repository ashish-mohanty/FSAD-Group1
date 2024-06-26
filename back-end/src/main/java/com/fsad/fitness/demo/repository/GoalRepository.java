package com.fsad.fitness.demo.repository;

import com.fsad.fitness.demo.model.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List; // Import List class from java.util package

public interface GoalRepository extends JpaRepository<Goal, Integer> {
    // Additional query methods can be added here if needed

    List<Goal> findByUserId(String userId);
}
