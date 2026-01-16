import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { ButtonProps } from "../Button/types";
import { PasswordRule, PasswordStrengthProps } from "../PasswordStrengthMeter/types";

// Definition of a registration field
export type RegistrationField = TextInputProps & {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "date" | "password";
  required?: boolean;
};

// Styling options for the AccountRegistration component
export type AccountRegistrationStyle = {
  containerStyling?: StyleProp<ViewStyle>;
  // submitButtonStyling?: StyleProp<ViewStyle>;
  // submitTextStyling?: StyleProp<TextStyle>;
  submitButtonStyling?: ButtonProps;
  passwordStrengthStyling?: PasswordStrengthProps["style"];
};

// Props for the AccountRegistration component
export type AccountRegistrationProps = {
  fields: RegistrationField[];
  passwordRules: PasswordRule[];
  confirmationText?: string;
  styling?: AccountRegistrationStyle;
  onSubmit: (values: Record<string, string>) => void;
};

// Props for password fields
export type PasswordFieldProps = RegistrationField & {
  rules: PasswordRule[];
  strengthStyle?: PasswordStrengthProps["style"];
};
