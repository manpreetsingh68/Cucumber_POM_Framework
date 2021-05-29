package com.cogmento_cucumber.runner;

import java.io.File;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features" }, 
	glue = { "com/cogmento_cucumber/steps" }, 
	monochrome = true, 
	plugin = { "json:target/RunCuke/cucumber.json", "pretty","html:target/cucumber", "com.cucumber.listener.ExtentCucumberFormatter" },
	tags = {"@Login, @CreateNewContact, @CreateNewDeal, @CreateNewCompany"},
	strict = true)
public class RunCukeTest {
	
	@BeforeClass
	public static void setup() {
		
		String fileName = System.getProperty("user.dir") + "\\target\\cucumber\\extentReport.html";
		File file = new File(fileName);
		
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(file, true);
		ExtentCucumberFormatter.loadConfig(new File("/src/test/resources/extent-config.xml"));
		
		ExtentCucumberFormatter.addSystemInfo("Browser name", "Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser version", "v90.0.4430.212");
		ExtentCucumberFormatter.addSystemInfo("Selenium version", "v3.141.59");
		
	}
}
