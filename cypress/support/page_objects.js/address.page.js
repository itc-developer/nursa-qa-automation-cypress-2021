class AdressPage {

    DeliveryAddress(emailfaker, firstname, lastname, company, street, country, city, postcode) {
    cy.get('#sylius_checkout_address_customer_email').type(emailfaker)
    cy.get('#sylius_checkout_address_billingAddress_firstName').type(firstname)
    cy.get('#sylius_checkout_address_billingAddress_lastName').type(lastname)
    cy.get('#sylius_checkout_address_billingAddress_company').type(company)
    cy.get('#sylius_checkout_address_billingAddress_street').type(street)
    cy.get('#sylius_checkout_address_billingAddress_countryCode').select(country)
    cy.get('#sylius_checkout_address_billingAddress_city').type(city)
    cy.get('#sylius_checkout_address_billingAddress_postcode').type(postcode)
    cy.get('#next-step').click()
}}

export default new AdressPage()