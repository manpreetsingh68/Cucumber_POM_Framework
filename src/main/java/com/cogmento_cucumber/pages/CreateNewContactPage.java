package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class CreateNewContactPage extends BasePage {
	
	@FindBy(xpath = "//input[@name='first_name']")
	private WebElement txtFirstName;
	
	@FindBy(xpath = "//input[@name='last_name']")
	private WebElement txtLastName;
	
	@FindBy(xpath = "//div[@name='company']//input")
	private WebElement txtCompany;
	
	@FindBy(xpath = "//button[text()='Save']")
	private WebElement btnSave;
	
	public CreateNewContactPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public void enterNewContactData(String firstName, String lastName, String company) {
		sendKeys(txtFirstName, firstName);
		sendKeys(txtLastName, lastName);
		sendKeys(txtCompany, company);
		
	}
	
	public void clickOnSaveContact() {
		click(btnSave);
	}
}
