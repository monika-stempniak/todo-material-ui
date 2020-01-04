Cypress.Commands.add("seedAndVisit", (seedData = "fixture:todos") => {
  cy.server();
  cy.route("GET", "https://jsonplaceholder.typicode.com/todos", seedData);
  cy.visit("/");
});
