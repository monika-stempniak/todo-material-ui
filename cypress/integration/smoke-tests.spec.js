import { wait } from "@testing-library/dom";

describe("Smoke tests", () => {
  it("Saves new todos", () => {
    cy.seedAndVisit([]);

    const items = [
      { text: "Buy milk", expectedLength: 1 },
      { text: "Buy eegs", expectedLength: 2 },
      { text: "Buy bread", expectedLength: 3 }
    ];

    cy.wrap(items).each(item => {
      cy.focused()
        .type(item.text)
        .type("{enter}");

      cy.get("[data-testid=todos-list] li").should(
        "have.length",
        item.expectedLength
      );
    });
  });

  it("Toggles todos", () => {
    const clickTodo = $el => {
      cy.wrap($el)
        .find("[data-toggle=toggle]")
        .click();
    };

    cy.seedAndVisit();

    cy.get("[data-testid=todos-list] li").as("list");

    cy.get("@list")
      .each($el => clickTodo($el))
      .find("[data-completed=completed]")
      .should("have.length", 3);

    cy.get("@list")
      .each($el => clickTodo($el))
      .find("[data-completed=completed]")
      .should("have.length", 1);
  });

  // it.only("Deletes todos", () => {
  //   cy.seedAndVisit();

  //   cy.get("[data-testid=todos-list] li")
  //     .each(($el, i) => {
  //       cy.wrap($el)
  //         .find("[data-delete=delete-todo]")
  //         .click();
  //     })
  //     .should("not.exist");
  // });
});
