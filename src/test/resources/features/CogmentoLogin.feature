@Login
Feature: To validate login functionality is working 
	In order to validate that
	the login is working fine

Scenario: Login into the cogmento application 
	Given User is on Login page of website "https://ui.cogmento.com/" 
	When User enters "er_manpreet68@yahoo.com" and "SatnamKaur@1990" 
	And User clicks on login button 
	Then User should be navigated to Home page 
	And Page title should be "Cogmento CRM"


	
	
	