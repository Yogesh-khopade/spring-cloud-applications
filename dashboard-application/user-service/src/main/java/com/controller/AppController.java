package com.controller;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {	

	public static final Logger logger = LoggerFactory.getLogger(AppController.class);

	@Value("${linechart}")
	private String linechartFile;
	
	@Value("${barchart}")
	private String barchartFile;
	
	@Value("${pichart}")
	private String pichartFile;
	
	@Value("${funnel}")
	private String funnelFile;
	
	@Value("${doughnutchart}")
	private String doughnutchartFile;
	
	@RequestMapping(value="/linechart", method=RequestMethod.GET, produces="application/json")
	String getLineChart()
	{
		StringBuilder data = new StringBuilder();
		 FileReader fr = null;
		try {
			fr = new FileReader(linechartFile);
			int i;    
	         while((i=fr.read())!=-1)    
	         data.append((char)i);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
        finally {
        	try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}   
           
		return data.toString();
	}
	
	@RequestMapping(value="/barchart", method=RequestMethod.GET, produces="application/json")
	String getBarChart()
	{
		StringBuilder data = new StringBuilder();
		 FileReader fr = null;
		try {
			fr = new FileReader(barchartFile);
			int i;    
	         while((i=fr.read())!=-1)    
	         data.append((char)i);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
        finally {
        	try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}   
           
		return data.toString();
	}
	
	@RequestMapping(value="/pichart", method=RequestMethod.GET, produces="application/json")
	String getPiChart()
	{
		StringBuilder data = new StringBuilder();
		 FileReader fr = null;
		try {
			fr = new FileReader(pichartFile);
			int i;    
	         while((i=fr.read())!=-1)    
	         data.append((char)i);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
        finally {
        	try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}   
           
		return data.toString();
	}
	
	@RequestMapping(value="/funnel", method=RequestMethod.GET, produces="application/json")
	String getFunnel()
	{
		StringBuilder data = new StringBuilder();
		 FileReader fr = null;
		try {
			fr = new FileReader(funnelFile);
			int i;    
	         while((i=fr.read())!=-1)    
	         data.append((char)i);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
        finally {
        	try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}   
           
		return data.toString();
	}
	
	@RequestMapping(value="/doughnutchart", method=RequestMethod.GET, produces="application/json")
	String getDoughnutChart()
	{
		StringBuilder data = new StringBuilder();
		 FileReader fr = null;
		try {
			fr = new FileReader(doughnutchartFile);
			int i;    
	         while((i=fr.read())!=-1)    
	         data.append((char)i);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}    
        finally {
        	try {
				fr.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}   
           
		return data.toString();
	}
}
