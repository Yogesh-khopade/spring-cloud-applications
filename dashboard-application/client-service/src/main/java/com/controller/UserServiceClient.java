package com.controller;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(value ="Spring-Cloud-User-Service",fallback =AppController.class)
public interface UserServiceClient {
	
	@RequestMapping( value = "/linechart",method = RequestMethod.GET)
    String getLineChart();
	
	@RequestMapping( value = "/barchart",method = RequestMethod.GET)
    String getBarChart();
	
	@RequestMapping( value = "/pichart",method = RequestMethod.GET)
    String getPiChart();
	
	@RequestMapping( value = "/funnel",method = RequestMethod.GET)
    String getFunnel();
	
	@RequestMapping( value = "/doughnutchart",method = RequestMethod.GET)
    String getDoughnutChart();
}
