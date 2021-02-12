import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange
    render(<CheckoutForm />);

    // Act 
    const formHeader = screen.getByText(/checkout form/i);

    // Assert
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
      // Arrange
      render(<CheckoutForm />);

      // Act
      // Set up query input elements
      const firstNameInput = screen.getByLabelText(/first name/i)
      const lastNameInput = screen.getByLabelText(/last name/i)
      const addressInput = screen.getByLabelText(/address/i)
      const cityInput = screen.getByLabelText(/city/i)
      const stateInput = screen.getByLabelText(/state/i)
      const zipInput = screen.getByLabelText(/zip/i)

      // user types into those inputs
      userEvent.type(firstNameInput, 'Kenan')
      userEvent.type(lastNameInput, 'Dolic')
      userEvent.type(addressInput, '7th St')
      userEvent.type(cityInput, 'Los Angeles')
      userEvent.type(stateInput, 'CA')
      userEvent.type(zipInput, '90210')

      // user clicks 'CHECKOUT'
      const button = screen.getByRole('button')
      userEvent.click(button)

      // Assert
      const newCheckout = await screen.findByText(/You have ordered some plants!/i)
      expect(newCheckout).toBeInTheDocument();
});
