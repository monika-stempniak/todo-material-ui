describe("The Home Page", function() {
  it("successfully loads /todos page", function() {
    cy.visit("/");
    cy.url().should("include", "/todos");
  });
});
