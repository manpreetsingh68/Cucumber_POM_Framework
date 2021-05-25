package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class LoginPage extends BasePage {
	
	@FindBy(xpath = "//input[@name='email']")
	private WebElement txtEmailAddress;
	
	@FindBy(xpath = "//input[@name='password']")
	private WebElement txtPassword;
	
	@FindBy(xpath = "//div[text()='Login']")
	private WebElement btnLogin;
	
	public LoginPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public void enterUserNameAndPassword(String username, String password) {
		waitForElementToBeVisible(txtEmailAddress, 60);
		sendKeys(txtEmailAddress, username);
		sendKeys(txtPassword, password);
		
	}
	
	public void clickOnLoginButton() {
		click(btnLogin);
	}
}
