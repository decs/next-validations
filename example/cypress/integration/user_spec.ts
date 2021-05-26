/// <reference types="cypress" />

export {};

context('Hello API Route', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should get error when navigate to /api/user', async () => {
    cy.request({
      method: 'POST',
      url: '/api/user',
      body: {
        username: 'jelly',
      },
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).equal(400);
    });
  });

  it('should say user name when navigate to /api/user', async () => {
    cy.request({
      method: 'POST',
      url: '/api/user',
      body: {
        username: 'jellydn',
      },
    }).then(response => {
      expect(response.status).equal(200);
      expect(response.body.username).equal('jellydn');
    });
  });
});
