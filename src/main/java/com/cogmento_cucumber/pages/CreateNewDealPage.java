package com.cogmento_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.base.BasePage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class CreateNewDealPage extends BasePage {
	
	@FindBy(xpath = "//input[@name='title']")
	private WebElement txtTitle;
	
	@FindBy(xpath = "//div[@name='company']//input")
	private WebElement txtCompany;
	
	@FindBy(xpath = "//textarea[@name='description']")
	private WebElement txtDescription;
	
	@FindBy(xpath = "//button[text()='Save']")
	private WebElement btnSave;
	
	public CreateNewDealPage() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public void enterNewDealData(String title, String company, String description) {
		sendKeys(txtTitle, title);
		sendKeys(txtCompany, company);
		sendKeys(txtDescription, description);
		
	}
	
	public void clickOnSaveDeal() {
		click(btnSave);
	}
}
