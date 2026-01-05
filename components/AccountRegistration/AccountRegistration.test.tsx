import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import { AccountRegistration } from "./AccountRegistration";
import { RegistrationField } from "./types";

// 1. Setup av mock-data baserat på dina typer
const mockFields: RegistrationField[] = [
  { id: "user", label: "Användarnamn", type: "text" },
  { id: "dob", label: "Födelsedatum", type: "date" },
  { id: "pass", label: "Lösenord", type: "password" },
];

const mockRules = [{ id: "1", label: "Minst 5 tecken", test: (p: string) => p.length >= 5 }];

describe("AccountRegistration UI-tester", () => {
  test("skall rendera rätt antal fält och etiketter", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );

    // Visar förståelse för rendering
    expect(screen.getByText("Användarnamn")).toBeTruthy();
    expect(screen.getByText("Födelsedatum")).toBeTruthy();
  });

  test("skall formatera datum korrekt (logik-test i UI)", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );

    const dateInput = screen.getByTestId("input-dob");

    // Simulerar användarinteraktion
    fireEvent.changeText(dateInput, "19950505");

    // Kontrollerar att handleDateChange fungerar
    expect(dateInput.props.value).toBe("1995-05-05");
  });

  test("skall anropa onSubmit med korrekt data vid klick", () => {
    const mockOnSubmit = jest.fn();
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={mockOnSubmit} />
    );

    fireEvent.changeText(screen.getByTestId("input-user"), "Göran");
    fireEvent.press(screen.getByTestId("input-user")); // Fokusera
    fireEvent.press(screen.getByTestId("submit-button"));

    // Bekräftar att komponenten levererar vad den lovar
    expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({ user: "Göran" }));
  });

  test("skall integrera med PasswordStrengthMeter", () => {
    render(
      <AccountRegistration fields={mockFields} passwordRules={mockRules} onSubmit={jest.fn()} />
    );

    const passInput = screen.getByTestId("input-pass");

    // Kontrollera initialt misslyckande (✗)
    expect(screen.getByText("✗")).toBeTruthy();

    // Skriv lösenord som uppfyller regeln
    fireEvent.changeText(passInput, "123456");

    // Kontrollera att status uppdateras till framgång (✓)
    expect(screen.getByText("✓")).toBeTruthy();
  });
});
