describe("Dashboard", () => {
  it("Renders a h1", () => {
    cy.visit("/");
    cy.contains("h1", "Dashboard");
  });
});
