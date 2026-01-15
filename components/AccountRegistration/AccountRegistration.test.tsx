import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { AccountRegistration } from "./AccountRegistration";
import { RegistrationField } from "./types";

const mockFields: RegistrationField[] = [
  { id: "user", label: "Username", type: "text" },
  { id: "dob", label: "DOB", type: "date" },
  { id: "pass", label: "Password", type: "password" },
];

const mockRules = [
  { id: "1", label: "Minimum password length is 5", test: (p: string) => p.length >= 5 },
];

describe("AccountRegistration UI-tests", () => {
  test("Should render corrent number of fields and labels", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );

    expect(screen.getByText("Username")).toBeTruthy();
    expect(screen.getByText("DOB")).toBeTruthy();
  });

  test("Should call onSubmit with correct number of data when clicked", () => {
    const mockOnSubmit = jest.fn();
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={mockOnSubmit} />
    );

    fireEvent.changeText(screen.getByTestId("input-user"), "Göran");
    fireEvent.press(screen.getByTestId("input-user"));
    fireEvent.press(screen.getByTestId("submit-button"));

    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({ user: "Göran" }));
  });
});
