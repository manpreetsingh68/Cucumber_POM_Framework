package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class ContactsPage extends BasePage {
	
	@FindBy(xpath = "//button[text()='Create']")
	private WebElement btnCreateContact;
	
	@FindBy(xpath = "//span[text()='Home']//preceding::i")
	private WebElement btnHome;
	
	public ContactsPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public CreateNewContactPage addContact() {
		click(btnCreateContact);
		
		return new CreateNewContactPage();
	}
	
	public boolean verifyNewContactAdded() {
		return isElementPresent(btnHome);
	}
	
}
