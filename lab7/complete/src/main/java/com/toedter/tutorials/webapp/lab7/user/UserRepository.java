package com.toedter.tutorials.webapp.lab7.user;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
}
