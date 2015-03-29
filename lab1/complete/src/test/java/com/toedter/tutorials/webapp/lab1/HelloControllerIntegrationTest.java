package com.toedter.tutorials.webapp.lab1;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.net.URL;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest({"server.port=0"})
public class HelloControllerIntegrationTest {

    @Value("${local.server.port}")
    private int port;

	private URL baseURL;
	private RestTemplate restTemplate;

	@Before
	public void before() throws Exception {
		this.baseURL = new URL("http://localhost:" + port + "/");
		restTemplate = new TestRestTemplate();
	}

	@Test
	public void shouldGetGreeting() throws Exception {
		ResponseEntity<String> response = restTemplate.getForEntity(baseURL.toString(), String.class);
		assertThat(response.getBody(), equalTo(HelloController.LAB1_GREETINGS_FROM_SPRING_BOOT));
	}
}
