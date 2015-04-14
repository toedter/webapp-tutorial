package com.toedter.tutorials.webapp.lab7;

import com.toedter.tutorials.webapp.lab7.user.UserTestDataLoader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.ShallowEtagHeaderFilter;

import javax.servlet.Filter;

@SpringBootApplication
public class Application {

    @Bean(initMethod = "loadData")
    UserTestDataLoader RepositoryTestData() {
        return new UserTestDataLoader();
    }

    @Bean
    public Filter shallowEtagHeaderFilter() {
        return new ShallowEtagHeaderFilter();
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
