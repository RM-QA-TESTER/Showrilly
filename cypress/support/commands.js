import LoginPage from "./pageObjects/LoginPage";

Cypress.Commands.add("login", (role = "default") => {
  const env = Cypress.env("environment") || "staging";

  const credentials = {
    staging: {
      default: { email: "clarice@swareco.com", password: "Password@123111" },
      producer: { email: "clariceproducer@swareco.com", password: "Password@123111" }
    },
    release: {
      default: { email: "themanualtester@swareco.com", password: "Password@123" }
    },
    prod: {
      default: { email: "automationtest@gmail.com", password: "Password@123111" }
    }
  };

  const { email, password } = credentials[env][role] || credentials[env].default;

  LoginPage.performLogin(email, password);
});
