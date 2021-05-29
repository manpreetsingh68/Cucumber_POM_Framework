package com.cogmento_cucumber.steps;

import com.cogmento_cucumber.base.SideMenuBar;
import com.cogmento_cucumber.pages.CompaniesPage;
import com.cogmento_cucumber.pages.CreateNewCompanyPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewCompanySteps {
	
	SideMenuBar sideMenu = new SideMenuBar();
	CompaniesPage companyPage;
	CreateNewCompanyPage createNewCompany;
	
	@When("^User clicks on Companies from Side Menu$")
	public void user_clicks_on_Companies_from_Side_Menu() {
		companyPage = sideMenu.navigateToCompanies();
	}

	@When("^User click on Create Company button$")
	public void user_click_on_Create_Company_button() {
		createNewCompany = companyPage.addCompany();
	}

	@When("^User enters company details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_company_details_and(String name, String description, String industry) {
		createNewCompany.enterNewCompanyData(name, description, industry);
	}

	@When("^User click on Save Company Button$")
	public void user_click_on_Save_Company_Button() {
		createNewCompany.clickOnSaveCompany();
	}

	@Then("^New Company should be added$")
	public void new_Company_should_be_added() {
		companyPage.verifyNewCompanyAdded();
	}
}
