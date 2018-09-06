package com.controller;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(value ="Spring-Cloud-Security-Service",fallback =AppController.class)
public interface SecurityServiceClient {
	
	@RequestMapping( value = "/appname")
    String appName();
}
