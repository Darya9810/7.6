// ***********************************************
// Этот пример commands.js показывает вам, как
// создавать различные пользовательские команды и перезаписывать
// существующие команды.
//
// Для получения более полных примеров пользовательских
// команды пожалуйста, прочитайте больше здесь:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- Это родительская команда --
// Кипарис.Команды.add("login", (логин, пароль) => {
//
//
// -- Это дочерняя команда --
// Кипарис.Команды.добавить('перетащить', { prevSubject: 'элемент'}, (тема, параметры) => { ... })
//
//
// -- Это двойная команда --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addFavoriteBook", (book) => {
  cy.contains("Add new").click();
  cy.contains("Book description");
  cy.get("#title").type(book.title);
  cy.get("#description").type(book.description);
  cy.get("#authors").type(book.author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBookNoFavorite", (book) => {
  cy.contains("Add new").click();
  cy.get("input#title").type(book.title);
  cy.get("input#description").type(book.description);
  cy.get("input#authors").type(book.author);
  cy.contains("Submit").click();
});
