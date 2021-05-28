package com.example;

import org.springframework.http.HttpHeaders;

public class Response {
	
	private String data;
	
	private HttpHeaders headers;

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public HttpHeaders getHeaders() {
		return headers;
	}

	public void setHeaders(HttpHeaders headers) {
		this.headers = headers;
	}
	
	

}
