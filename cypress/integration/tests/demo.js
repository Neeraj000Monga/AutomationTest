///<reference types ="cypress" />

describe("this is suite", () => {
  it("verify user is able to open google.com", () => {
    cy.visit("www.google.com");
  });
});
