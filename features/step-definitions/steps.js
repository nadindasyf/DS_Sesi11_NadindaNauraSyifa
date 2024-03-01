// steps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../../features/pageobjects/login.page.js'; // Update the path based on your project structure

const pages = {
    login: new LoginPage(),
}

Given('I am on the SauceDemo login page', () => {
    browser.url('https://www.saucedemo.com/');
});

When('I enter valid username and password', () => {
    pages.login.login('standard_user', 'secret_sauce');
});


When('I click the login button', () => {
    pages.login.btnSubmit.click();
});

Then('I should be on the products page', () => {
    expect(browser).toHaveUrlContaining('/inventory.html');
    expect($('.title')).toHaveTextContaining('Products');
});
export { Given, When, Then };