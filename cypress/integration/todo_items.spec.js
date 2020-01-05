describe("Todos items", () => {
  beforeEach(() => {
    cy.seedAndVisit();
  });

  const joinWords = word => {
    return word
      .toLowerCase()
      .split(" ")
      .join("-");
  };

  const item = "et porro tempora";
  const test = joinWords(item);

  it("Properly displays completed items", () => {
    cy.get("[data-testid=todos-list] li")
      .filter("[data-completed=completed]")
      .should("have.length", 1)
      .and("contain", item)
      .find(`[data-testid=completed-${test}]`)
      .should("exist");
  });

  it("Shows remaining todos in the footer", () => {
    cy.get("[data-testid=todo-count]").should("contain", "3 todos left");
  });

  it("Removes a todo", () => {
    cy.get("[data-testid=todos-list] li").as("list");

    cy.get("@list")
      .should("have.length", 4)
      .find(`[data-testid=delete-${test}]`)
      .should("exist")
      .click();

    cy.get("@list")
      .should("have.length", 3)
      .and("not.contain", item);
  });

  it("Marks an incomplete item complete", () => {
    // cy.fixture("todos").then(todo => {
    //   const target = Cypress._.head(todo);
    //   target.completed = true;
    // });

    cy.get("[data-testid=todos-list] li")
      .first()
      .as("first-todo");

    cy.get("@first-todo")
      .find("[data-toggle=toggle]")
      .click();

    cy.get("@first-todo")
      .find("[data-completed=completed]")
      .should("exist");

    cy.get("[data-testid=todo-count]").should("contain", "2 todos left");
  });
});
