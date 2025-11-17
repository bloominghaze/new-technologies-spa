describe('Full Authentication and Filtering Flow', () => {

  it('should pass all checks for protected and public routes', () => {

    // 1. ПІДГОТОВКА: Очищуємо localStorage
    cy.clearLocalStorage();

    // 2. СИМУЛЯЦІЯ ЛОГІНУ: Встановлюємо токен вручну
    // Це миттєво переводить додаток у стан "залогінено"
    cy.window().then((window) => {
      // УВАГА: Ми використовуємо фейковий токен, який має бути в AuthService
      window.localStorage.setItem('authToken', 'fake-valid-jwt-token-for-e2e');
    });

    // 3. ПЕРЕВІРКА GUARD: Спробувати перейти на захищену сторінку (/items/new)
    cy.visit('/items/new');
    cy.url().should('include', '/items/new'); // <-- Очікуємо залишитися тут

    // 4. ПЕРЕХОДИМО НА СПИСОК І ПЕРЕВІРЯЄМО, ЩО ДАНІ ЗАВАНТАЖИЛИСЯ
    cy.visit('/items');

    // 5. ПЕРЕВІРКА ІНТЕГРАЦІЇ: Всі 4 елементи завантажились
    cy.get('app-item-card', { timeout: 10000 }).should('have.length', 4); //

    // 6. ТЕСТ ПОШУКУ (ФІЛЬТРАЦІЯ):
    cy.get('.search-input').type('Quantum');
    cy.get('app-item-card').should('have.length', 1); // Має залишитися одна
    cy.get('.search-input').clear(); // Очищаємо

    // 7. ТЕСТ ЗАХИЩЕНОГО ПЕРЕХОДУ: Переходимо на сторінку деталей
    cy.get('.details-button').first().click();
    cy.url().should('include', '/items/1');

    // 8. ЛОГАУТ: Перевіряємо вихід
    cy.get('.logout-button').click();
    cy.url().should('include', '/login');
  });
});
