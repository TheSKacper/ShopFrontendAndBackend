package com.example.Shop.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "rating")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rating {
    @Id
    private String id;
    private String userId;
    private String productId;
    private int rating;
    private String comment;
}
