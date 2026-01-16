import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { AccountRegistration } from "./AccountRegistration";
import { RegistrationField } from "./types";

const mockFields: RegistrationField[] = [
  { id: "user", label: "Username", type: "text" },
  { id: "dob", label: "DOB", type: "date" },
  { id: "pass", label: "Password", type: "password" },
];

const mockRules = [{ id: "1", label: "Minimum password length is 5", test: (p: string) => p.length >= 5 }];

describe("AccountRegistration UI-tests", () => {
  test("Should render correct labels", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );

    expect(screen.getByText("Username")).toBeTruthy();
    expect(screen.getByText("DOB")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();
  });

  test("Should call onSubmit with correct number of data when clicked", () => {
    const mockOnSubmit = jest.fn();
    render(<AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={mockOnSubmit} />);

    // Input username and password
    fireEvent.changeText(screen.getByTestId("input-user"), "Göran");
    fireEvent.changeText(screen.getByTestId("input-pass"), "12345");

    // Click the submit button
    fireEvent.press(screen.getByTestId("submit-button"));

    // Check that its beings called with the right data
    expect(mockOnSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        user: "Göran",
        pass: "12345",
      })
    );
  });

  test("Should print error message if the password is not following the rules", () => {
    const mockOnSubmit = jest.fn();
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={mockOnSubmit} />
    );
    // Input username and a weak password
    fireEvent.changeText(screen.getByTestId("input-user"), "Göran");
    fireEvent.changeText(screen.getByTestId("input-pass"), "123");  
    // Click the submit button
    fireEvent.press(screen.getByTestId("submit-button"));
    // Check that error message is shown
    expect(
      screen.getByText(
        /Password is too weak, these rules are not met: Minimum password length is 5/
      )
    ).toBeTruthy();
  });

  test("Should print rules with correct fail styling, when password is not following rules", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );
    // Input a weak password
    fireEvent.changeText(screen.getByTestId("input-pass"), "123");
    // Check that the rule is shown with fail styling
    expect(screen.getByText("Minimum password length is 5")).toHaveStyle({
      color: "darkred",
    });

  });
  test("Should print rules with correct pass styling, when password is following rules", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );
    // Input a strong password
    fireEvent.changeText(screen.getByTestId("input-pass"), "12345");
    // Check that the rule is shown with pass styling
    expect(screen.getByText("Minimum password length is 5")).toHaveStyle({
      color: "green",
    });
  });
});