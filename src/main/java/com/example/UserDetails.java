package com.example;

public class UserDetails {
	
	private String userName;
	
	private String userAge;
	
	private String address;
	
	

	public UserDetails(String userName, String userAge, String address) {
		super();
		this.userName = userName;
		this.userAge = userAge;
		this.address = address;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserAge() {
		return userAge;
	}

	public void setUserAge(String userAge) {
		this.userAge = userAge;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	

}
