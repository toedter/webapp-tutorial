package com.toedter.tutorials.webapp.lab1;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HelloControllerIntegrationTest {

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	public void shouldGetGreeting() throws Exception {
		ResponseEntity<String> response = restTemplate.getForEntity("/", String.class);
		assertThat(response.getBody(), equalTo(HelloController.LAB1_GREETINGS_FROM_SPRING_BOOT));
	}
}
