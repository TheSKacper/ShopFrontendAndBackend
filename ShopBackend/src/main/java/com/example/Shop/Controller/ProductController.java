package com.example.Shop.Controller;

import com.example.Shop.Model.Product;
import com.example.Shop.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:5173/")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getProducts()
    {
        return new ResponseEntity<List<Product>>(productService.listOfProducts(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable String id)
    {
        return new ResponseEntity<Optional<Product>>(productService.findProduct(id),HttpStatus.OK);
    }

    @GetMapping("category/{category}")
    public ResponseEntity<List<Product>>getByCategory(@PathVariable String category)
    {
        return new ResponseEntity<List<Product>>(productService.findByCategory(category),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product)
    {
        return  new ResponseEntity<Product>(productService.addProduct(product),HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteProduct(@PathVariable String id)
    {
        return new ResponseEntity<Boolean>(productService.deleteProduct(id),HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id,@RequestBody Product product)
    {
        if(productService.isExisted(id))
        {
            return new ResponseEntity<Product>(productService.updateProduct(product),HttpStatus.OK);
        }else {
            return  new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
        }
    }
}
