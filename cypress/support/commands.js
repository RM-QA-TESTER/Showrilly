Cypress.Commands.add("login", (role = "default") => {
  const envName = Cypress.env("environment") || "staging"; 

  const credentials = {
    staging: {
      creator: { email: "clarice@swareco.com", password: "Password@123111" },
      producer: { email: "clariceproducer@swareco.com", password: "Password@123111" } 
    },
    release: {
      default: { email: "themanualtester@swareco.com", password: "Password@123" }
    },
    prod: {
      default: { email: "automationtest@gmail.com", password: "Password@123111" }
    }
  };

  const { email, password } = credentials[envName][role] || credentials[envName].default;

  cy.get("//input[@id='user_email']", {timeout: 10000}).type(email);
  cy.get("//input[@id='user_password']", {timeout: 10000}).type(password);
  cy.get("input[value='Sign in']", {timeout: 10000}).click();
});