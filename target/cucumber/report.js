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
  "duration": 10922804900,
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
  "duration": 2152231000,
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
  "duration": 4125625100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 158758900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1775733900,
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
  "duration": 138771400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2413887000,
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
  "duration": 10602749700,
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
  "duration": 2337943400,
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
  "duration": 2781244900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 241930400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1331194300,
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
  "duration": 119047000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 1232659900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 31129027500,
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
  "duration": 1342805900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 537658000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 52084400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1151642800,
  "status": "passed"
});
formatter.before({
  "duration": 9751035700,
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
  "duration": 3514151000,
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
  "duration": 5330453500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 336905900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 2324073600,
  "status": "passed"
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
  "duration": 470530700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 4292396000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 30896676700,
  "status": "passed"
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
  "duration": 6208351900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 6826964100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 4746686900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 9823825400,
  "status": "passed"
});
formatter.before({
  "duration": 13043445600,
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
  "duration": 31483070300,
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
  "duration": 7077820400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 293483500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 9418975300,
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
  "duration": 206175300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 1041566200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 31151274300,
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
  "duration": 1400704300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 460685300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 85809800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1084475500,
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
  "duration": 9712024800,
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
  "duration": 1952919900,
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
  "duration": 3177797600,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 171097200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1188647200,
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
  "duration": 65501400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 803511400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 30651982800,
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
  "duration": 1403703000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 163173800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 65465600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1132577900,
  "status": "passed"
});
formatter.before({
  "duration": 9811658000,
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
  "duration": 1696164600,
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
  "duration": 3998688200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 288157300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1243853000,
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
  "duration": 84714000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 608170700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 30683722200,
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
  "duration": 1263476900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 228292800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 102019700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1151606900,
  "status": "passed"
});
formatter.before({
  "duration": 9539666200,
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
  "duration": 1979966900,
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
  "duration": 2305809000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 237568000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1287145000,
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
  "duration": 70417300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 801793200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 30790062800,
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
  "duration": 2234130400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 171089600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 60810500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1709427600,
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
  "duration": 10780646000,
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
  "duration": 3461957900,
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
  "duration": 3189383800,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 456334000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1481683700,
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
  "duration": 1145241200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 5861510900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 31098029000,
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
  "duration": 4136722800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 318805600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 64192200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1090319400,
  "status": "passed"
});
formatter.before({
  "duration": 9827674000,
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
  "duration": 1988551800,
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
  "duration": 4009287100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 222691400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1420274500,
  "status": "passed"
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
  "duration": 147823000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 952784000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 30921863400,
  "status": "passed"
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
  "duration": 2728394000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 330218100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 73897800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1197473000,
  "status": "passed"
});
formatter.before({
  "duration": 10145793000,
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
  "duration": 2867291100,
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
  "duration": 3517465300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 208734200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 2056865000,
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
  "duration": 73723800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 978052300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 30864167100,
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
  "duration": 4045892500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 283727400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 67729500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1153677800,
  "status": "passed"
});
});