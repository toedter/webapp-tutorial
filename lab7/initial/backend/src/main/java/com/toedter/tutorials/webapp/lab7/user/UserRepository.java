package com.toedter.tutorials.webapp.lab7.user;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
}
