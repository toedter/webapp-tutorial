package com.toedter.tutorials.webapp.lab7.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

public class UserTestDataLoader {
    private final Logger logger = LoggerFactory.getLogger(UserTestDataLoader.class);

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void loadData() {
        logger.info("init test data");
        User toedter_k = new User("toedter_k", "Kai Toedter", "kai@toedter.com");
        userRepository.save(toedter_k);
        User toedter_r = new User("toedter_r", "Renate Toedter", "renate@toedter.com");
        userRepository.save(toedter_r);
        User toedter_t = new User("toedter_t", "Timo Toedter", "timo@toedter.com");
        userRepository.save(toedter_t);
        User toedter_n = new User("toedter_n", "Nina Toedter", "nina@toedter.com");
        userRepository.save(toedter_n);
        User doe_jo = new User("doe_jo", "John Doe", "john@doe.com");
        userRepository.save(doe_jo);
        User doe_ja = new User("doe_ja", "Jane Doe", "jane@doe.com");
        userRepository.save(doe_ja);
    }
}