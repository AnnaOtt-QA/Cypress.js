describe('Проверка авторизации', function () {

    it('1 Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('qa_one_love1'); //ввели венрый пароль
         cy.get('#loginButton').click(); //нажал Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
     })



     it('2 автотест на проверку логики восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#forgotEmailButton').click(); //нажала Забыли пароль
         cy.get('#forgotForm > .header').contains('Восстановите пароль');// элемент содержит текст Восстановите пароль
         cy.get('#forgotForm > .header').should('be.visible'); //текст виден пользователю
         cy.get('#exitRestoreButton').should('be.visible'); //есть крестик и он виден пользователю

         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#restoreEmailButton').click(); //нажала Отправитиь код


         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что после нажатия кнопки Отправить код, есть текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton').should('be.visible'); //крестик есть и виден пользователю
                 
        })



         it('3 Верный логин и НЕ верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('qa_one_'); //ввели Не верный пароль
         cy.get('#loginButton').click(); //нажал Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после нажатия Войти вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton').should('be.visible'); //есть крестик и он виден пользователю
     })



         it('4 Не верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('anna@dolnikov.ru'); // ввели Не верный логин
         cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал Войти

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после нажатия Войти вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton').should('be.visible'); //есть крестик и он виден пользователю
     })


     it('5 негативный кейс валидации Ввести логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('germandolnikov.ru'); // ввели логин без "@"
         cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал Войти

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю наличие текста об ошибке валидации
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
     })




     it('6  проверку на приведение к строчным буквам в логине:', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт

         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с заглавными буквами
         cy.get('#pass').type('qa_one_love1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал Войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю наличие текста об авторизации
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
     })


})

        
