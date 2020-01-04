describe("Input form", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  it("focuses input on load", () => {
    cy.focused().should("have.id", "text_field");
  });

  it("accepts input", () => {
    const text = "Buy milk";

    cy.get("#text_field")
      .type(text)
      .should("have.value", text);
  });

  context("Form submission", () => {
    it("Adds a new todo on submit", () => {
      const text = "Buy eggs";
      const test = "buy-eggs";

      cy.get("#text_field")
        .type(text)
        .type("{enter}")
        .should("have.value", "");
      cy.get(`[data-testid=todo-${test}]`).should("contain", text);
    });
  });
});
