package com.example.Shop.Controller;

import com.example.Shop.Model.LoginResponse;
import com.example.Shop.Model.User;
import com.example.Shop.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/auth/register")
    public String registerUser(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode((user.getPassword())));
        if (user.getRole() == null) {
            user.setRole("user");
        }
        userRepository.save(user);
        return "User registered";
    }

    @PostMapping("/auth/login")
    public LoginResponse loginUser(@RequestBody User loginUser) {
        String response = "Bad password or username !";
        Optional<User> userOptional = userRepository.findByUsername(loginUser.getUsername());

        if (userOptional.isEmpty()) {
            return new LoginResponse(null,null,null,false);
        }

        User user = userOptional.get();
        if (passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
            return new LoginResponse(user.getId(),user.getUsername(),user.getRole(),true);
        } else {
            return new LoginResponse(null,null,null,false);
        }

    }
}
