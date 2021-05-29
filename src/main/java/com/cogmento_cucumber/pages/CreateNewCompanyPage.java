package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class CreateNewCompanyPage extends BasePage {
	
	@FindBy(xpath = "//input[@name='name']")
	private WebElement txtName;
	
	@FindBy(xpath = "//textarea[@name='description']")
	private WebElement txtDescription;
	
	@FindBy(xpath = "//input[@name='industry']")
	private WebElement txtIndustry;
	
	@FindBy(xpath = "//button[text()='Save']")
	private WebElement btnSave;
	
	public CreateNewCompanyPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public void enterNewCompanyData(String name, String description, String industry) {
		sendKeys(txtName, name);
		sendKeys(txtDescription, description);
		sendKeys(txtIndustry, industry);
		
	}
	
	public void clickOnSaveCompany() {
		click(btnSave);
	}
}
