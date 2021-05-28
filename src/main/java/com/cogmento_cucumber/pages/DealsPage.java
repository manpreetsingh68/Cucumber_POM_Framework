package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class DealsPage extends BasePage {
	
	@FindBy(xpath = "//button[text()='Create']")
	private WebElement btnCreateDeal;
	
	@FindBy(xpath = "//span[text()='Home']//preceding::i")
	private WebElement btnHome;
	
	public DealsPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public CreateNewDealPage addDeal() {
		click(btnCreateDeal);
		
		return new CreateNewDealPage();
	}
	
	public boolean verifyNewDealAdded() {
		return isElementPresent(btnHome);
	}
	
}
