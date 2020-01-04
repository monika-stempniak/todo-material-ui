describe("App initialization", () => {
  it("Loads todos on page load", () => {
    cy.seedAndVisit();

    cy.get("[data-testid=todos-list] li").should("have.length", 4);
  });

  it("Displays an error on failure", () => {
    cy.server();
    cy.route({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "GET",
      status: 500,
      response: {}
    });
    cy.visit("/");

    cy.get("[data-testid=todos-list] li").should("not.exist");
    cy.get("[data-testid=error]").should("be.visible");
  });
});
