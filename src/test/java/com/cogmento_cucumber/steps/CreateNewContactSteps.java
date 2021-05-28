package com.cogmento_cucumber.steps;

import org.junit.Assert;

import com.cogmento_cucumber.base.SideMenuBar;
import com.cogmento_cucumber.pages.ContactsPage;
import com.cogmento_cucumber.pages.CreateNewContactPage;
import com.cogmento_cucumber.pages.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewContactSteps {
	
	HomePage homePage = new HomePage();
	SideMenuBar sideMenu = new SideMenuBar();
	ContactsPage contactPage;
	CreateNewContactPage createNewContact;
	
	@Given("^User is already on Home Page$")
	public void user_is_already_on_Home_Page() {
		Assert.assertTrue("User is not able to navigate to Home page", homePage.verifyHomePageLoads());
	}

	@When("^User clicks on Contact from Side Menu$")
	public void user_clicks_on_Contact_from_Side_Menu() {
		contactPage = sideMenu.navigateToContacts();
		
	}

	@When("^User click on Create Contact button$")
	public void user_click_on_Create_button() {
		createNewContact = contactPage.addContact();
	}
	
	@When("^User enters contact details \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contact_details_and(String firstName, String lastName, String company) {
		createNewContact.enterNewContactData(firstName, lastName, company);
	}

	
	@When("^User click on Save Contact Button$")
	public void user_click_on_Save_Button() {
		createNewContact.clickOnSaveContact();
	}

	@Then("^New contact should be added$")
	public void new_contact_should_be_added() {
		Assert.assertTrue("User is not able to create new contact", contactPage.verifyNewContactAdded());
	}

}
