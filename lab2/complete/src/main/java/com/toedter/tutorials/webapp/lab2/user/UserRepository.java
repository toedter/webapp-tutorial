package com.toedter.tutorials.webapp.lab2.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends CrudRepository<User, String>, PagingAndSortingRepository<User, String> {
}
