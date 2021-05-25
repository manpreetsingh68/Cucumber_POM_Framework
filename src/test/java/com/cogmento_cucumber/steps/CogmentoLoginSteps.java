package com.cogmento_cucumber.steps;

import org.junit.Assert;

import com.cogmento_cucumber.pages.HomePage;
import com.cogmento_cucumber.pages.LoginPage;
import com.cogmento_cucumber.utils.SeleniumDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CogmentoLoginSteps {
	
	LoginPage loginPage = new LoginPage();
	HomePage homePage = new HomePage();
	
	@Given("^User is on Login page of website \"([^\"]*)\"$")
	public void user_is_on_Login_page_of_website(String url) {
		SeleniumDriver.openUrl(url);
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		loginPage.enterUserNameAndPassword(username, password);
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPage.clickOnLoginButton();
	}

	@Then("^User should be navigated to Home page$")
	public void user_should_be_navigated_to_Home_page() {
		Assert.assertTrue("User is not able to navigaet to Home page", homePage.verifyHomePageLoads());
	}

	@Then("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) {
		Assert.assertEquals("Page title is not correct", title, homePage.getHomePageTitle());
	}
	
}
