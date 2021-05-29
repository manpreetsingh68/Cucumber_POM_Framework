package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class CompaniesPage extends BasePage {
	
	@FindBy(xpath = "//button[text()='Create']")
	private WebElement btnCreateCompany;
	
	@FindBy(xpath = "//span[text()='Home']//preceding::i")
	private WebElement btnHome;
	
	public CompaniesPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public CreateNewCompanyPage addCompany() {
		click(btnCreateCompany);
		
		return new CreateNewCompanyPage();
	}
	
	public boolean verifyNewCompanyAdded() {
		return isElementPresent(btnHome);
	}
	
}
