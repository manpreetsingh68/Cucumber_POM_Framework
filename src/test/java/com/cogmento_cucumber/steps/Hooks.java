package com.cogmento_cucumber.steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.cogmento_cucumber.utils.SeleniumDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
	
	@Before
	public static void setUp() {
		SeleniumDriver.setDriver();
	}
	
	@After
	public static void tearDown(Scenario scenario) {
		WebDriver driver = SeleniumDriver.getDriver();
		
		byte[] screenshotBytes = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshotBytes, "image/png");
		
		SeleniumDriver.tearDown();
	}
}
