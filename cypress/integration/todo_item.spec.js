describe("Todo item", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("Can be completed and then deleted", () => {
    const text = "Buy eggs";
    const test = "buy-eggs";

    cy.get("#text_field")
      .type(text)
      .type("{enter}")
      .should("have.value", "");
    cy.get(`[data-testid=todo-${test}]`).should("contain", text);
    cy.get(`[data-testid=complete-${test}]`)
      .should("exist")
      .click();
    cy.get(`[data-testid=delete-${test}]`)
      .should("exist")
      .click();
    cy.get(`[data-testid=todo-${test}]`).should("not.exist");
  });
});
