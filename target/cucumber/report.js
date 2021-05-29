$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login_Contacts_Deals_Companies.feature");
formatter.feature({
  "line": 1,
  "name": "To validate login functionality is working",
  "description": "In order to validate that\r\nthe login is working fine",
  "id": "to-validate-login-functionality-is-working",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login into the cogmento application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Page title is \"\u003cpage title\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application;",
  "rows": [
    {
      "cells": [
        "page title"
      ],
      "line": 16,
      "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application;;1"
    },
    {
      "cells": [
        "Cogmento CRM"
      ],
      "line": 17,
      "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10489210900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 8340885000,
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
  "duration": 6380261600,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5298223100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 2302685900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login into the cogmento application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Page title is \"Cogmento CRM\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cogmento CRM",
      "offset": 15
    }
  ],
  "location": "CogmentoLoginSteps.page_title_is(String)"
});
formatter.result({
  "duration": 28575000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 16407216300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreateNewContact"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters contact details \"\u003cfirst name\u003e\", \"\u003clast name\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "company"
      ],
      "line": 29,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;1"
    },
    {
      "cells": [
        "Bob",
        "Marley",
        "Google"
      ],
      "line": 30,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;2"
    },
    {
      "cells": [
        "Mark",
        "Twain",
        "FIS"
      ],
      "line": 31,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;3"
    },
    {
      "cells": [
        "Harley",
        "Quinn",
        "Microsoft"
      ],
      "line": 32,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10326547100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 2466140200,
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
  "duration": 3033733700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 258037700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1436874900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreateNewContact"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters contact details \"Bob\", \"Marley\" and \"Google\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 131525400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 894798700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 894462000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 29
    },
    {
      "val": "Marley",
      "offset": 36
    },
    {
      "val": "Google",
      "offset": 49
    }
  ],
  "location": "CreateNewContactSteps.user_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "duration": 2188444900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 557749600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 205405000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2495295200,
  "status": "passed"
});
formatter.before({
  "duration": 10960080000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 1866583900,
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
  "duration": 4809792500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MANPREET\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\Manpreet\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60774}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 90.0.4430.212, webStorageEnabled: true}\nSession ID: 76942382403637f232087254e02845fc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:326)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.cogmento_cucumber.base.BasePage.waitForElementToBeVisible(BasePage.java:31)\r\n\tat com.cogmento_cucumber.pages.LoginPage.enterUserNameAndPassword(LoginPage.java:26)\r\n\tat com.cogmento_cucumber.steps.CogmentoLoginSteps.user_enters_and(CogmentoLoginSteps.java:25)\r\n\tat ✽.When User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"(Login_Contacts_Deals_Companies.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreateNewContact"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters contact details \"Mark\", \"Twain\" and \"FIS\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 29
    },
    {
      "val": "Twain",
      "offset": 37
    },
    {
      "val": "FIS",
      "offset": 49
    }
  ],
  "location": "CreateNewContactSteps.user_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 2592585500,
  "status": "passed"
});
formatter.before({
  "duration": 11120127900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 2368166100,
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
  "duration": 14286638800,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1545199600,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1218547800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CreateNewContact"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters contact details \"Harley\", \"Quinn\" and \"Microsoft\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 71853600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 7727983500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 530508100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harley",
      "offset": 29
    },
    {
      "val": "Quinn",
      "offset": 39
    },
    {
      "val": "Microsoft",
      "offset": 51
    }
  ],
  "location": "CreateNewContactSteps.user_enters_contact_details_and(String,String,String)"
});
formatter.result({
  "duration": 1607014600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 423193300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 84718700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1285801400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters deal details \"\u003ctitle\u003e\", \"\u003ccompany\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;",
  "rows": [
    {
      "cells": [
        "title",
        "company",
        "description"
      ],
      "line": 45,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;1"
    },
    {
      "cells": [
        "Space",
        "SpaceX",
        "Building awesome rockets"
      ],
      "line": 46,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;2"
    },
    {
      "cells": [
        "Automobile",
        "Tesla",
        "Battery powered cars"
      ],
      "line": 47,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;3"
    },
    {
      "cells": [
        "Food manufacturing",
        "Nestle",
        "Making Maggi for generations"
      ],
      "line": 48,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9896323800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 6400231100,
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
  "duration": 7307076300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3195831900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1206229600,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters deal details \"Space\", \"SpaceX\" and \"Building awesome rockets\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 60753800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 725439800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 627368300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Space",
      "offset": 26
    },
    {
      "val": "SpaceX",
      "offset": 35
    },
    {
      "val": "Building awesome rockets",
      "offset": 48
    }
  ],
  "location": "CreateNewDealsStep.user_enters_deal_details_and(String,String,String)"
});
formatter.result({
  "duration": 1020640400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 5267624100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 42360300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 40207434800,
  "status": "passed"
});
formatter.before({
  "duration": 9976185900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 1666276700,
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
  "duration": 3084405200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 237965300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1342781000,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters deal details \"Automobile\", \"Tesla\" and \"Battery powered cars\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 66073500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 764684900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 530525600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automobile",
      "offset": 26
    },
    {
      "val": "Tesla",
      "offset": 40
    },
    {
      "val": "Battery powered cars",
      "offset": 52
    }
  ],
  "location": "CreateNewDealsStep.user_enters_deal_details_and(String,String,String)"
});
formatter.result({
  "duration": 1590068700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 597766400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 54810200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1023238000,
  "status": "passed"
});
formatter.before({
  "duration": 9636853100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 1875425100,
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
  "duration": 2505283200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 234982800,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1628863400,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters deal details \"Food manufacturing\", \"Nestle\" and \"Making Maggi for generations\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 68560400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 809808900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 1033347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Food manufacturing",
      "offset": 26
    },
    {
      "val": "Nestle",
      "offset": 48
    },
    {
      "val": "Making Maggi for generations",
      "offset": 61
    }
  ],
  "location": "CreateNewDealsStep.user_enters_deal_details_and(String,String,String)"
});
formatter.result({
  "duration": 2400113300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 185970000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 44995300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 981234500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Create new company in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@CreateNewCompany"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User clicks on Companies from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click on Create Company button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User enters company details \"\u003cname\u003e\", \"\u003cdescription\u003e\" and \"\u003cindustry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Save Company Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "New Company should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;",
  "rows": [
    {
      "cells": [
        "name",
        "description",
        "industry"
      ],
      "line": 60,
      "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;1"
    },
    {
      "cells": [
        "Nestle",
        "Food manufacturing",
        "Making Maggi for generations"
      ],
      "line": 61,
      "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;2"
    },
    {
      "cells": [
        "Tesla",
        "Space",
        "Building awesome rockets"
      ],
      "line": 62,
      "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;3"
    },
    {
      "cells": [
        "Food manufacturing",
        "Nestle",
        "Making Maggi for gegenrations"
      ],
      "line": 63,
      "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10150942700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 1957572900,
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
  "duration": 4136450800,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5325350000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1414356100,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Create new company in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@CreateNewCompany"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User clicks on Companies from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click on Create Company button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User enters company details \"Nestle\", \"Food manufacturing\" and \"Making Maggi for generations\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Save Company Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "New Company should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 577488000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 12655973200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 5657035400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nestle",
      "offset": 29
    },
    {
      "val": "Food manufacturing",
      "offset": 39
    },
    {
      "val": "Making Maggi for generations",
      "offset": 64
    }
  ],
  "location": "CreateNewCompanySteps.user_enters_company_details_and(String,String,String)"
});
formatter.result({
  "duration": 7642558500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 5448358700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 60230183900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on XP (5465a2d02aab888b722d5df1ba754aaa)] -\u003e xpath: //span[text()\u003d\u0027Home\u0027]//preceding::i] (tried for 60 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MANPREET\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\Manpreet\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61057}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 90.0.4430.212, webStorageEnabled: true}\nSession ID: 5465a2d02aab888b722d5df1ba754aaa\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.cogmento_cucumber.base.BasePage.waitForElementToBeVisible(BasePage.java:31)\r\n\tat com.cogmento_cucumber.base.BasePage.isElementPresent(BasePage.java:40)\r\n\tat com.cogmento_cucumber.pages.CompaniesPage.verifyNewCompanyAdded(CompaniesPage.java:29)\r\n\tat com.cogmento_cucumber.steps.CreateNewCompanySteps.new_Company_should_be_added(CreateNewCompanySteps.java:38)\r\n\tat ✽.Then New Company should be added(Login_Contacts_Deals_Companies.feature:57)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 60103854800,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 10.000\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MANPREET\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\Manpreet\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61057}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 90.0.4430.212, webStorageEnabled: true}\nSession ID: 5465a2d02aab888b722d5df1ba754aaa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.cogmento_cucumber.steps.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 57800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 532321600,
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
  "duration": 90677680200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //input[@name\u003d\u0027email\u0027]\u0027 (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.cogmento_cucumber.base.BasePage.waitForElementToBeVisible(BasePage.java:31)\r\n\tat com.cogmento_cucumber.pages.LoginPage.enterUserNameAndPassword(LoginPage.java:26)\r\n\tat com.cogmento_cucumber.steps.CogmentoLoginSteps.user_enters_and(CogmentoLoginSteps.java:25)\r\n\tat ✽.When User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"(Login_Contacts_Deals_Companies.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.212)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.18363 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MANPREET\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\Manpreet\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61057}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 90.0.4430.212, webStorageEnabled: true}\nSession ID: 5465a2d02aab888b722d5df1ba754aaa\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.cogmento_cucumber.base.BasePage.waitForElementToBeVisible(BasePage.java:31)\r\n\tat com.cogmento_cucumber.pages.LoginPage.enterUserNameAndPassword(LoginPage.java:26)\r\n\tat com.cogmento_cucumber.steps.CogmentoLoginSteps.user_enters_and(CogmentoLoginSteps.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 62,
  "name": "Create new company in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@CreateNewCompany"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User clicks on Companies from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click on Create Company button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User enters company details \"Tesla\", \"Space\" and \"Building awesome rockets\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Save Company Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "New Company should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tesla",
      "offset": 29
    },
    {
      "val": "Space",
      "offset": 38
    },
    {
      "val": "Building awesome rockets",
      "offset": 50
    }
  ],
  "location": "CreateNewCompanySteps.user_enters_company_details_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 6437112200,
  "status": "passed"
});
formatter.before({
  "duration": 10175177400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Login page of website \"https://ui.cogmento.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"er_manpreet68@yahoo.com\" and \"SatnamKaur@1990\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be navigated to Home page",
  "keyword": "Then "
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
  "duration": 1799238800,
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
  "duration": 2682672100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 202772700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1719092500,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Create new company in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-company-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@CreateNewCompany"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "User clicks on Companies from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click on Create Company button",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User enters company details \"Food manufacturing\", \"Nestle\" and \"Making Maggi for gegenrations\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on Save Company Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "New Company should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 45215300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 487201800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 658063900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Food manufacturing",
      "offset": 29
    },
    {
      "val": "Nestle",
      "offset": 51
    },
    {
      "val": "Making Maggi for gegenrations",
      "offset": 64
    }
  ],
  "location": "CreateNewCompanySteps.user_enters_company_details_and(String,String,String)"
});
formatter.result({
  "duration": 3696031900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 157376900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 43828400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 954415600,
  "status": "passed"
});
});