package com.toedter.tutorials.webapp.lab2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    @Bean(initMethod = "loadData")
    TestDataLoader RepositoryTestData() {
        return new TestDataLoader();
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
