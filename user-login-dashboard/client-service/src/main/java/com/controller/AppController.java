package com.controller;

import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class AppController implements SecurityServiceClient, UserServiceClient
{
	public static final Logger logger = LoggerFactory.getLogger(AppController.class);

	@Autowired
	private SecurityServiceClient securityServiceClient;

	@Autowired
	UserServiceClient userServiceClient;
	
	@RequestMapping("/app")
	public String appName() {
		String name = securityServiceClient.appName();
		return name;
	}

	@RequestMapping(value = "/getline",method = RequestMethod.GET, produces="application/json")
	public String getLineChart()
	{
		String data=userServiceClient.getLineChart(); 
		return data;
	}
	
	@RequestMapping(value = "/getbar",method = RequestMethod.GET, produces="application/json")
	public String getBarChart()
	{
		String data=userServiceClient.getBarChart(); 
		return data;
	}
	
	@RequestMapping(value = "/getpi",method = RequestMethod.GET, produces="application/json")
	public String getPiChart()
	{
		String data=userServiceClient.getPiChart(); 
		return data;
	}
	
	@RequestMapping(value = "/getfunnel",method = RequestMethod.GET, produces="application/json")
	public String getFunnel()
	{
		String data=userServiceClient.getFunnel(); 
		return data;
	}
	
	@RequestMapping(value = "/getdoughnut",method = RequestMethod.GET, produces="application/json")
	public String getDoughnutChart()
	{
		String data=userServiceClient.getDoughnutChart(); 
		return data;
	}

	@CrossOrigin
	@RequestMapping("/login")
	public Principal authenticateUser(Principal principal) {
		logger.info("user logged " + principal);
		String name = securityServiceClient.appName();
		System.out.println("Name==="+name);
		return principal;
	}
}
