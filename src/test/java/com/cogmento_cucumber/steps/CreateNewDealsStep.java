package com.cogmento_cucumber.steps;

import org.junit.Assert;

import com.cogmento_cucumber.base.SideMenuBar;
import com.cogmento_cucumber.pages.CreateNewDealPage;
import com.cogmento_cucumber.pages.DealsPage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewDealsStep {
	
	SideMenuBar sideMenu = new SideMenuBar();
	DealsPage dealPage;
	CreateNewDealPage createNewDeal;
	
	@When("^User clicks on Deals from Side Menu$")
	public void user_clicks_on_Deals_from_Side_Menu() {
		dealPage = sideMenu.navigateToDeals();
	}
	
	@When("^User click on Create Deal button$")
	public void user_click_on_Create_button() {
		createNewDeal = dealPage.addDeal();
	}

	@When("^User enters deal details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_deal_details_and(String title, String company, String description) {
		createNewDeal.enterNewDealData(title, company, description);
	}
	
	@When("^User click on Save Deal Button$")
	public void user_click_on_Save_Button() {
		createNewDeal.clickOnSaveDeal();
	}

	@Then("^New deal should be added$")
	public void new_deal_should_be_added() {
		Assert.assertTrue("User is not able to create new deal", dealPage.verifyNewDealAdded());
	}

}
