Feature: Login to Saucedemo

Scenario: Login with valid credentials on Chrome
  Given I am on the SauceDemo login page
  When I enter valid username and password
  And I click the login button
  Then I should be on the products page

Scenario: Login with valid credentials on Firefox
  Given I am on the SauceDemo login page
  When I enter valid username and password
  And I click the login button
  Then I should be on the products page
