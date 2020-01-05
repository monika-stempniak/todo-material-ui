describe("The About Page", function() {
  it("successfully loads", function() {
    cy.visit("/");

    cy.get("[data-testid=about]").as("about");

    cy.get("@about")
      .should("have.attr", "href")
      .and("include", "/about");

    cy.get("@about").click({ force: true });

    cy.url().should("include", "/about");
  });
});
