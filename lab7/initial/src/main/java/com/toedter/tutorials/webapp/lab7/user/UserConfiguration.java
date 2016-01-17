package com.toedter.tutorials.webapp.lab7.user;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@Configuration
public class UserConfiguration extends RepositoryRestConfigurerAdapter {
 
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(User.class);
    }
}