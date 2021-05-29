package com.cogmento_cucumber.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cogmento_cucumber.utils.SeleniumDriver;

public class BasePage {
	
	//private static WebDriver driver = SeleniumDriver.getDriver();
	
	public void click(WebElement element) {
		waitForElementToBeClickable(element, 60);
		element.click();
		SeleniumDriver.log.debug("Clicked on element-> " + element);
	}
	
	public void sendKeys(WebElement element, String keysToSend) {
		element.sendKeys(keysToSend);
		SeleniumDriver.log.debug("Sent keys on element-> " + element + " value-> " + keysToSend);
	}
	
	public void moveToElement(WebElement element) {
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(element).build().perform();
		SeleniumDriver.log.debug("Moved to element-> " + element);
	}
	
	public void waitForElementToBeVisible(WebElement element, int timeOutInSeconds) {
		WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(), timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element)); 
		SeleniumDriver.log.debug("Element" + element + " found on page");
	}
	
	public void waitForElementToBeClickable(WebElement element, int timeOutInSeconds) {
		WebDriverWait wait = new WebDriverWait(SeleniumDriver.getDriver(), 60);
		wait.until(ExpectedConditions.elementToBeClickable(element));
	}
	
	public boolean isElementPresent(WebElement element) {
		waitForElementToBeVisible(element, 60);
		boolean isElementFound = element.isDisplayed();
		return isElementFound;		
	}
	
	public String getPageTitle() {
		return SeleniumDriver.getDriver().getTitle();
	}
	
}
