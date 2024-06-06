package com.example.Shop.Controller;

import com.example.Shop.Model.Rating;
import com.example.Shop.Service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rating")
@CrossOrigin(origins = "http://localhost:5173/")
public class RatingController {
    @Autowired
    RatingService ratingService;

    @GetMapping
    public ResponseEntity<List<Rating>> getRatings()
    {
        return new ResponseEntity<List<Rating>>(ratingService.getRatings(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Rating> createRating(@RequestBody Rating rating){
        return new ResponseEntity<Rating>(ratingService.createRating(rating),HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteRating(@PathVariable String id)
    {
        return new ResponseEntity<>(ratingService.deleteRating(id),HttpStatus.OK);
    }


}
