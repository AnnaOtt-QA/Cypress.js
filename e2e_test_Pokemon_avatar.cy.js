describe('Проверка покупки нового аватара', function () {       
    
    it(' сквозной e2e (end-to-end) автотест для покемонов: на покупку нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); //зашли на сайт

         cy.get('#k_email').type('USER_LOGIN'); //ввожу верный логин
         cy.get('#k_password').type('USER_PASSWORD'); //ввожу верный пароль
         cy.get('.MuiButton-root').click();// нажимаю кнопку Войти

         cy.get('.header_card_trainer').click();// нажимаю кнопку Тренера
         cy.get('[data-qa="shop"]').click();// нажимаю кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         

        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4003600000000014');//вводим номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('03/26');//вводим дату действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');//вводим CVV код карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Anna Ott');//вводим имя вледельца
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаю кнопку Оплатить

        cy.get('.style_1_base_input').type('56456');//вводим код из пуш или смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();//нажимает кнопку Оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); //проверяем, что есть текст
        cy.get('.payment_status_top_title').should('be.visible');//проверяем, что текст виден пользователю

        cy.get('.style_1_base_link_blue').contains('Вернуться в магазин'); //проверяем, что есть текст
        cy.get('.style_1_base_link_blue').click();//нажимаем на кнопку

         });

 });
