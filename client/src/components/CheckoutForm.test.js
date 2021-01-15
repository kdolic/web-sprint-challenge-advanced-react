import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //ARRANGE
    render(<CheckoutForm />)
    //ACT
    const formHeader = screen.getByText(/Checkout Form/i);
    //ASSERT
    expect(formHeader).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
    //ARRANGE
    render(<CheckoutForm />)

    //ACT
    // 1. Get our first name, last name, address, city, state. zip (along with button & success) input fields.
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');
    
    // 2. Type values into our input fields.
    userEvent.type(firstNameInput, 'Kenan');
    userEvent.type(lastNameInput, "Dolic");
    userEvent.type(addressInput, "711 7th St");
    userEvent.type(cityInput, "Los Angeles");
    userEvent.type(stateInput, "CA");
    userEvent.type(zipInput, "90210");

    // 3. Push the checkout button.
    userEvent.click(button);

    //ASSERT
    const newCustomerCheckout = await screen.findByText(/You have ordered some plants!/i);
    expect(newCustomerCheckout).toBeInTheDocument();



});
