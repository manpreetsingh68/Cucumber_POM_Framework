@Login @CreateNewContact @CreateNewDeal 
Feature: To validate login functionality is working 
	In order to validate that
	the login is working fine

Background: User is already on login page of application 
	Given User is on Login page of website "https://ui.cogmento.com/" 
	When User enters "er_manpreet68@yahoo.com" and "SatnamKaur@1990" 
	And User clicks on login button 
	Then User should be navigated to Home page 
	
Scenario Outline: Login into the cogmento application 
	Then Page title is "<page title>" 
	
	Examples: 
		|page title|
		|Cogmento CRM|
		
Scenario Outline: Create new contact in the application 
	Given User is already on Home Page 
	When User clicks on Contact from Side Menu 
	And User click on Create Contact button 
	And User enters contact details "<first name>", "<last name>" and "<company>" 
	And User click on Save Contact Button 
	Then New contact should be added 
	
	Examples: 
		|first name   |last name|company   |
		|Bob          |Marley   |Google    |
		|Mark		  |Twain    |FIS       |
		|Harley       |Quinn    |Microsoft |
		
		
Scenario Outline: Create new deal in the application 
	Given User is already on Home Page 
	When User clicks on Deals from Side Menu 
	And User click on Create Deal button 
	And User enters deal details "<title>", "<company>" and "<description>" 
	And User click on Save Deal Button 
	Then New deal should be added 
	
	Examples: 
		|title   	  		|company  |description   				|
		|Space          	|SpaceX   |Building awesome rockets    	|
		|Automobile		  	|Tesla    |Battery powered cars       	|
		|Food manufacturing |Nestle   |Making Maggi for gegenrations|
		
		
		
		
	