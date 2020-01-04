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
      .filter("[data-testid=completed]")
      .should("have.length", 1)
      .and("contain", item)
      .find(`[data-testid=completed-${test}]`)
      .should("exist");
  });

  it("Shows remaining todos in the footer", () => {
    cy.get("[data-testid=todos-left]").should("contain", 3);
  });

  it.only("Removes a todo", () => {
    cy.get("[data-testid=todos-list] li").as("list");

    cy.get("@list")
      .should("have.length", 4)
      .find(`[data-testid=completed-${test}]`)
      .should("exist")
      .click();

    cy.get("@list")
      .should("have.length", 3)
      .and("not.contain", item);
  });
});
