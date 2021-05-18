package com.example;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {
	private static List<UserDetails> userDetails;
	static {
		userDetails = Arrays.asList(new UserDetails("vivek", "27", "Singapore"),
				new UserDetails("Ashwin", "27", "Singapore"), new UserDetails("Ashwin k", "27", "Singapore"),
				new UserDetails("John", "27", "Singapore"), new UserDetails("John", "27", "Singapore"),
				new UserDetails("John", "27", "Singapore"), new UserDetails("John", "27", "Singapore"));

	}

	@GetMapping(value = "/login")
	public ModelAndView welcome() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index2.html");
		return modelAndView;
	}

	@GetMapping(value = "/userdetails")
	public List<UserDetails> getUserDeails() {
		return userDetails;
	}
}