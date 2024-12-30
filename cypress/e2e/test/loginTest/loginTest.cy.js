import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import articles from "../../workflows/LoginTest";

Given("I am on empty home page", () => {
  cy.visit("https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide");
});

Then("I clicked the blog link", () => {
  cy.get('[href="/blog"] > .prettyLink').click();
});

Then("I am searching for the articles", () => {
  cy.get("input[placeholder='Search articles']")
    .type("Time travelling with Replay")
    .wait(2000);
});

Then("I clicked the articles card", () => {
  cy.get("a[href='/time-travelling-with-replayio']").click().wait(2000);
});

// =========

Given("I am on empty home page", () => {
  cy.visit("https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide");
});

Then("I clicked the Workshops link", () => {
  cy.get('[href="/workshops"] > .prettyLink').click().wait(2000);
});

Then("I clicked the articles cypress core workshop card", () => {
  cy.get(articles.workshopCard.Card).click();
});

Then("I clicked activate button", () => {
  cy.get(articles.workshopCard.Activate).click();
});

Then("I type my first name", () => {
  cy.get(articles.Subscribe.FirstName).type("Rj");
});

Then("I type my first name", () => {
  cy.get(articles.Subscribe.FirstName).clear();
});

Then("I type my first name", () => {
  cy.get(articles.Subscribe.ReFirstNameFirstName).type("RjCoder");
});

Then("I type my email", () => {
  cy.get(articles.Subscribe.Email).type("Rj1000@gmail.com").wait(1000)
});

Then("I click the subscribe button", () => {
  cy.get(articles.Subscribe.SubscribeButton).click();
});



// Then("I clicked the articles cypress core workshop card", () => {
//   // Log articles to check the structure
//   cy.log(JSON.stringify(articles));

//   if (articles.workshopCard && articles.workshopCard.Card) {
//     cy.get(articles.workshopCard.Card).click();
//   } else {
//     cy.log("workshopCard or Card selector is not defined.");
//   }
// });
