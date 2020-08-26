package com.toedter.tutorials.webapp.lab7.user;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest
public class UserRepositoryIntegrationTest {

	@Autowired
	UserRepository userRepository;

	@Test
	public void shouldFindsAllUsers() {
		Iterable<User> users = userRepository.findAll();
		assertThat(users, is(not(emptyIterable())));
	}

	@Test
	public void shouldCreatesNewUser() {
		Long before = userRepository.count();

		User user = userRepository.save(createUser());

		Iterable<User> result = userRepository.findAll();
		assertThat(result, is(Matchers.<User>iterableWithSize(before.intValue() + 1)));
		assertThat(result, hasItem(user));
	}

	public static User createUser() {
		User testUser = new User("test_user", "Test", "test@toedter.com");
		return testUser;
	}
}
