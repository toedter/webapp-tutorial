/**
 * Copyright (c) 2014 Kai Toedter
 * All rights reserved.
 * Licensed under MIT License, see http://toedter.mit-license.org/
 */

package com.toedter.tutorials.webapp.lab2;

import com.toedter.tutorials.webapp.lab2.user.User;
import com.toedter.tutorials.webapp.lab2.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class TestDataLoader {
    private final Logger logger = LoggerFactory.getLogger(TestDataLoader.class);

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void loadData() {
        logger.info("init test data");
        User toedter_k = new User("toedter_k", "Kai Toedter", "kai@toedter.com");
        userRepository.save(toedter_k);
        User doe_jo = new User("doe_jo", "John Doe", "john@doe.com");
        userRepository.save(doe_jo);
        User doe_ja = new User("doe_ja", "Jane Doe", "jane@doe.com");
        userRepository.save(doe_ja);
    }
}