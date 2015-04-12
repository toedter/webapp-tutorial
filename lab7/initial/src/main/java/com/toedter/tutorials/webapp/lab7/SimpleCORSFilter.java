package com.toedter.tutorials.webapp.lab7;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class SimpleCORSFilter implements Filter {

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		// create the servlet response here
 	}

	public void init(FilterConfig filterConfig) {}

	public void destroy() {}

}