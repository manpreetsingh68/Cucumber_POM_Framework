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
  "duration": 11055890800,
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
  "duration": 2279556400,
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
  "duration": 2593822400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 249538100,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1248546300,
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
  "duration": 16773000,
  "status": "passed"
});
formatter.after({
  "duration": 1459176400,
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
  "duration": 9514332500,
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
  "duration": 2129054400,
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
  "duration": 2872976400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 270553500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1338068700,
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
  "duration": 58693400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 914559900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 684671100,
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
  "duration": 1383143000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 437249100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 122440100,
  "status": "passed"
});
formatter.after({
  "duration": 813492700,
  "status": "passed"
});
formatter.before({
  "duration": 9613338900,
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
  "duration": 1757865400,
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
  "duration": 2703476700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 248468200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1976774300,
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
  "duration": 60029500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 875947700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 829036700,
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
  "duration": 1777159200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 352805000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 71444800,
  "status": "passed"
});
formatter.after({
  "duration": 748816000,
  "status": "passed"
});
formatter.before({
  "duration": 9536268800,
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
  "duration": 2441120200,
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
  "duration": 2864309500,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 271593400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1208791100,
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
  "duration": 69460000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_clicks_on_Contact_from_Side_Menu()"
});
formatter.result({
  "duration": 699659500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Create_button()"
});
formatter.result({
  "duration": 514550700,
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
  "duration": 1517121500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 559049200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewContactSteps.new_contact_should_be_added()"
});
formatter.result({
  "duration": 102037800,
  "status": "passed"
});
formatter.after({
  "duration": 838101400,
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
  "duration": 9548041700,
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
  "duration": 1666990100,
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
  "duration": 2739619700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 203921400,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1316236400,
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
  "duration": 100901700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 875610600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 466870700,
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
  "duration": 2031840000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 155153600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 47608800,
  "status": "passed"
});
formatter.after({
  "duration": 743939200,
  "status": "passed"
});
formatter.before({
  "duration": 9545923000,
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
  "duration": 2091331500,
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
  "duration": 2846076600,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 376397200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1259744200,
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
  "duration": 89038800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 762297100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 493150500,
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
  "duration": 2282124900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 169563700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 58939300,
  "status": "passed"
});
formatter.after({
  "duration": 810974300,
  "status": "passed"
});
formatter.before({
  "duration": 9508722800,
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
  "duration": 2068138600,
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
  "duration": 2781575900,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 208944200,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1514454800,
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
  "duration": 65254900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_clicks_on_Deals_from_Side_Menu()"
});
formatter.result({
  "duration": 599352900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Create_button()"
});
formatter.result({
  "duration": 538255700,
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
  "duration": 1866456700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 284254700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewDealsStep.new_deal_should_be_added()"
});
formatter.result({
  "duration": 47524900,
  "status": "passed"
});
formatter.after({
  "duration": 922034100,
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
  "duration": 9546482600,
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
  "duration": 2238416300,
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
  "duration": 2561105300,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 273217000,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1302054000,
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
  "duration": 99418000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 5180934600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 404397500,
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
  "duration": 3570943700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 217899400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 63917800,
  "status": "passed"
});
formatter.after({
  "duration": 766018900,
  "status": "passed"
});
formatter.before({
  "duration": 9593923600,
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
  "duration": 1706657400,
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
  "duration": 3095930700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 224423700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1143201100,
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
  "duration": 80753200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 680411200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 598784300,
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
  "duration": 2627686300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 160570000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 57018100,
  "status": "passed"
});
formatter.after({
  "duration": 741732000,
  "status": "passed"
});
formatter.before({
  "duration": 9525381400,
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
  "duration": 1588215100,
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
  "duration": 2596553700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 407749700,
  "status": "passed"
});
formatter.match({
  "location": "CogmentoLoginSteps.user_should_be_navigated_to_Home_page()"
});
formatter.result({
  "duration": 1879957500,
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
  "duration": 82990000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_clicks_on_Companies_from_Side_Menu()"
});
formatter.result({
  "duration": 708685700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Create_Company_button()"
});
formatter.result({
  "duration": 509092100,
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
  "duration": 3628185000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.user_click_on_Save_Company_Button()"
});
formatter.result({
  "duration": 184077800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewCompanySteps.new_Company_should_be_added()"
});
formatter.result({
  "duration": 47876000,
  "status": "passed"
});
formatter.after({
  "duration": 745872300,
  "status": "passed"
});
});