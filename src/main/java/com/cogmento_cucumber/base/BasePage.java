package com.cogmento_cucumber.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cogmento_cucumber.utils.SeleniumDriver;

public class BasePage {
	
	private static WebDriver driver = SeleniumDriver.getDriver();
	
	public void click(WebElement element) {
		waitForElementToBeClickable(element, 60);
		element.click();
	}
	
	public void sendKeys(WebElement element, String keysToSend) {
		element.sendKeys(keysToSend);
	}
	
	public void moveToElement(WebElement element) {
		Actions action = new Actions(driver);
		action.moveToElement(element).build().perform();
		
	}
	
	public void waitForElementToBeVisible(WebElement element, int timeOutInSeconds) {
		WebDriverWait wait = new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element)); 
	}
	
	public void waitForElementToBeClickable(WebElement element, int timeOutInSeconds) {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public boolean isElementPresent(WebElement element) {
		waitForElementToBeVisible(element, 60);
		boolean isElementFound = element.isDisplayed();
		return isElementFound;		
	}
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	
}