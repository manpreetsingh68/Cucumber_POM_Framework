$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CogmentoLogin.feature");
formatter.feature({
  "line": 2,
  "name": "To validate login functionality is working",
  "description": "In order to validate that\r\nthe login is working fine",
  "id": "to-validate-login-functionality-is-working",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 13376888500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login into the cogmento application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Page title should be \"Cogmento CRM\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.cogmento.com/",
      "offset": 34
    }
  ],
  "location": "CogmentoLoginSteps.user_is_on_Login_page_of_website(String)"
});
formatter.result({
  "duration": 3142057400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "er_manpreet68@yahoo.com",
      "offset": 13
    },
    {
      "val": "SatnamKaur@1990",
      "offset": 43
    }
  ],
  "location": "CogmentoLoginSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 13802885200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 521714500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 2493256100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 22
    }
  ],
  "location": "CogmentoLoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 237721600,
  "status": "passed"
});
formatter.after({
  "duration": 1826561000,
  "status": "passed"
});
});