package com.example.Shop.Service;

import com.example.Shop.Model.Rating;
import com.example.Shop.Repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public List<Rating> getRatings() {
        return ratingRepository.findAll();
    }

    public boolean deleteRating(String id) {
        if (ratingRepository.existsById(id)) {
            ratingRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public Rating createRating(Rating rating) {
        return ratingRepository.save(rating);
    }

}
