package com.toedter.tutorials.webapp.lab2.user;

import com.toedter.tutorials.webapp.lab2.Application;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@Transactional
public class UserRepositoryIntegrationTest {

	@Autowired
	UserRepository userRepository;

	@Test
	public void findsAllUsers() {
		Iterable<User> users = userRepository.findAll();
		assertThat(users, is(not(emptyIterable())));
	}

	@Test
	public void createsNewUser() {
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
