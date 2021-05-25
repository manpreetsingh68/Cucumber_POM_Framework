package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class HomePage extends BasePage {
	
	@FindBy(xpath = "(//i[@class='settings icon'])[1]")
	private WebElement btnSettingsGear;
	
	@FindBy(xpath = "//span[text()='Home']//preceding::i")
	private WebElement btnHome;
	
	@FindBy(xpath = "//span[text()='Log Out']")
	private WebElement lnkLogOut;
	
	public HomePage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public boolean verifyHomePageLoads() {
		return isElementPresent(btnHome);
	}
	
	public String getHomePageTitle() {
		return getPageTitle();
	}
}
