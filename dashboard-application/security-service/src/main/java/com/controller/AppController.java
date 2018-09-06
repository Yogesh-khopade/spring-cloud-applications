package com.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RefreshScope
public class AppController {
	
	@Value("${name:Default Application}")
	private String name;
	
	@RequestMapping("/appname")
	String appName()
	{
		return name;
	}
}
