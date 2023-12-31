package com.ElectroMarket.catalogservice.controllers;

import com.ElectroMarket.catalogservice.config.Properties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    private final Properties properties;

    public HomeController(Properties properties) {
        this.properties = properties;
    }

    @GetMapping("/")
    public String getGreeting() {
        return properties.getGreeting();
    }
}
