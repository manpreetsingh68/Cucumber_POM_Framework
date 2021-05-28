$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login_Contacts_Deals.feature");
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
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login into the cogmento application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;login-into-the-cogmento-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "duration": 16514070200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 2954588900,
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
  "duration": 4968209800,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 906003300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1559149600,
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
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
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
  "duration": 9731500,
  "status": "passed"
});
formatter.after({
  "duration": 1067047900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters contact details \"\u003cfirst name\u003e\", \"\u003clast name\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
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
      "line": 28,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;1"
    },
    {
      "cells": [
        "Bob",
        "Marley",
        "Google"
      ],
      "line": 29,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;2"
    },
    {
      "cells": [
        "Mark",
        "Twain",
        "FIS"
      ],
      "line": 30,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;3"
    },
    {
      "cells": [
        "Harley",
        "Quinn",
        "Microsoft"
      ],
      "line": 31,
      "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9878836900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 1829963500,
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
  "duration": 2736837000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 182821100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1411662900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters contact details \"Bob\", \"Marley\" and \"Google\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 66852400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 788346000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 555458000,
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
  "duration": 1596016000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 663604300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 63409300,
  "status": "passed"
});
formatter.after({
  "duration": 810272400,
  "status": "passed"
});
formatter.before({
  "duration": 9878848700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 1915525500,
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
  "duration": 5089851000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 316548500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1313056100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters contact details \"Mark\", \"Twain\" and \"FIS\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 62869400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 695161500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 954066600,
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
  "duration": 1922215400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 541530200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 107853900,
  "status": "passed"
});
formatter.after({
  "duration": 851831400,
  "status": "passed"
});
formatter.before({
  "duration": 9885460500,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 1873337000,
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
  "duration": 3890476600,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 283343200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1260105000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create new contact in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-contact-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Contact from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on Create Contact button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters contact details \"Harley\", \"Quinn\" and \"Microsoft\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Save Contact Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "New contact should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 64595700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 692965500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 562996900,
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
  "duration": 2065921900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 499734100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 49446600,
  "status": "passed"
});
formatter.after({
  "duration": 804314700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters deal details \"\u003ctitle\u003e\", \"\u003ccompany\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
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
      "line": 43,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;1"
    },
    {
      "cells": [
        "Space",
        "SpaceX",
        "Building awesome rockets"
      ],
      "line": 44,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;2"
    },
    {
      "cells": [
        "Automobile",
        "Tesla",
        "Battery powered cars"
      ],
      "line": 45,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;3"
    },
    {
      "cells": [
        "Food manufacturing",
        "Nestle",
        "Making Maggi for gegenrations"
      ],
      "line": 46,
      "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10002328400,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 1932060000,
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
  "duration": 3078574200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 267112500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1857309000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters deal details \"Space\", \"SpaceX\" and \"Building awesome rockets\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 63939800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 834474700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 533846200,
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
  "duration": 2933816000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 180814200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 42986000,
  "status": "passed"
});
formatter.after({
  "duration": 837166800,
  "status": "passed"
});
formatter.before({
  "duration": 9867482800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 1043594000,
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
  "duration": 4167725900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5228955900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1068360400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters deal details \"Automobile\", \"Tesla\" and \"Battery powered cars\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 62379200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 11886343300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 39531230400,
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
  "duration": 2063417700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 560093000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 63647500,
  "status": "passed"
});
formatter.after({
  "duration": 811372300,
  "status": "passed"
});
formatter.before({
  "duration": 9776590300,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "User is already on login page of application",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "duration": 2481439500,
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
  "duration": 4201119500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 251834700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1328758300,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Create new deal in the application",
  "description": "",
  "id": "to-validate-login-functionality-is-working;create-new-deal-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@CreateNewContact"
    },
    {
      "line": 1,
      "name": "@CreateNewDeal"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on Deals from Side Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User click on Create Deal button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enters deal details \"Food manufacturing\", \"Nestle\" and \"Making Maggi for gegenrations\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on Save Deal Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "New deal should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContactSteps.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 87808700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 695273500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 701399800,
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
      "val": "Making Maggi for gegenrations",
      "offset": 61
    }
  ],
  "location": "CreateNewDealsStep.user_enters_deal_details_and(String,String,String)"
});
formatter.result({
  "duration": 3456307700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 205147000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 45905300,
  "status": "passed"
});
formatter.after({
  "duration": 829667400,
  "status": "passed"
});
});