package com.example.Shop.Service;

import com.example.Shop.Model.Product;
import com.example.Shop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> listOfProducts()
    {
        return productRepository.findAll();
    }

    public List<Product> findByCategory(String category)
    {
        return productRepository.findByCategory(category);
    }

    public Optional<Product> findProduct(String id)
    {
        return productRepository.findById(id);
    }

    public Product addProduct(Product product)
    {
        return productRepository.save(product);
    }

    public Product updateProduct(Product product)
    {
        return productRepository.save(product);
    }

    public boolean deleteProduct(String id)
    {
        if(productRepository.existsById(id))
        {
            productRepository.deleteById(id);
            return true;
        }else {
            return false;
        }
    }

    public boolean isExisted(String id)
    {
        if(productRepository.existsById(id))
        {
            return true;
        }else {
            return false;
        }
    }
}
