package com.example;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin
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
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping(value = "/test" ,consumes="application/json")
	public ResponseDTO getTestDate(@RequestBody UserVO userVO) {
		ResponseDTO responseDTO = new ResponseDTO<>();
		Response response = new Response();
		response.setData("[{\"userName\":\"vivek\",\"userAge\":20,\r\n" + 
				"\"location\":\"singapore\"},{\"userName\":\"John\",\"userAge\":208,\r\n" + 
				"\"location\":\"Chennai\"}]");
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		response.setHeaders(httpHeaders);
		responseDTO.setData(response);
		responseDTO.setResponseCode(200);
		return responseDTO;
	}
}