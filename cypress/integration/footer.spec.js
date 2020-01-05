describe("Footer", () => {
  context("with a single todo", () => {
    it("displays a signular todo in count", () => {
      cy.seedAndVisit([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        }
      ]);

      cy.get("[data-testid=todo-count]").should("contain", "1 todo left");
    });
  });

  context("with multiple todos", () => {
    beforeEach(() => {
      cy.seedAndVisit();
    });

    it("displays plural todos in count", () => {
      cy.get("[data-testid=todo-count]").should("contain", "3 todos left");
    });

    it("handles filter todos", () => {
      const filters = [
        { button: "Active", expectedLength: 3 },
        { button: "Completed", expectedLength: 1 },
        { button: "All", expectedLength: 4 }
      ];

      cy.wrap(filters).each(filter => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.contains(filter.button).click();

        cy.get("[data-testid=todos-list] li").should(
          "have.length",
          filter.expectedLength
        );
      });
    });
  });
});
