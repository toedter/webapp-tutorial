package com.toedter.tutorials.webapp.lab6.user;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
}
