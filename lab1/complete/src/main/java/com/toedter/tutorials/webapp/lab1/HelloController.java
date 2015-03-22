package com.toedter.tutorials.webapp.lab1;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    public static final String LAB1_GREETINGS_FROM_SPRING_BOOT = "Lab1: Greetings from Spring Boot!";

    @RequestMapping("/")
    public String index() {
        return LAB1_GREETINGS_FROM_SPRING_BOOT;
    }
    
}
