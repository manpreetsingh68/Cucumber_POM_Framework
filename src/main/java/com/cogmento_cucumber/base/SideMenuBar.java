package com.cogmento_cucumber.base;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cogmento_cucumber.pages.CompaniesPage;
import com.cogmento_cucumber.pages.ContactsPage;
import com.cogmento_cucumber.pages.DealsPage;
import com.cogmento_cucumber.utils.SeleniumDriver;

public class SideMenuBar extends BasePage {
	
	@FindBy(xpath = "//span[text()='Contacts']")
	private WebElement lnkContactsSpan;
	
	@FindBy(xpath = "//a[@class='item'][@href='/contacts']")
	private WebElement lnkContacts;
	
	@FindBy(xpath = "//span[text()='Deals']")
	private WebElement lnkDealsSpan;
	
	@FindBy(xpath = "//a[@class='item'][@href='/deals']")
	private WebElement lnkDeals;
	
	@FindBy(xpath = "//span[text()='Companies']")
	private WebElement lnkCompaniesSpan;
	
	@FindBy(xpath = "//a[@class='item'][@href='/companies']")
	private WebElement lnkCompanies;
	
	public SideMenuBar() {
		PageFactory.initElements(SeleniumDriver.getDriver(), this);
	}
	
	public void navigateToHome() {
	}

	public void navigateToCalendar() {

	}

	public ContactsPage navigateToContacts() {
		moveToElement(lnkContacts);
		click(lnkContactsSpan);
		
		return new ContactsPage();
	}

	public CompaniesPage navigateToCompanies() {
		moveToElement(lnkCompanies);
		click(lnkCompaniesSpan);
		
		return new CompaniesPage();
	}

	public DealsPage navigateToDeals() {
		moveToElement(lnkDeals);
		click(lnkDealsSpan);
		
		return new DealsPage();
	}

	public void navigateToTasks() {

	}

	public void navigateToCases() {

	}

}
