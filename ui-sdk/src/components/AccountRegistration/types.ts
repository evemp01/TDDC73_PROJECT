import { PressableProps, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { PasswordRule } from "../PasswordStrengthMeter/types";

// Definition of a registration field
export type RegistrationField = TextInputProps & {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "date" | "password";
  required?: boolean;
};

// Props for the AccountRegistration component
export type AccountRegistrationProps = {
  fields: RegistrationField[];
  passwordRules: PasswordRule[];
  confirmationText?: string;
  styling?: {
    containerStyling?: StyleProp<ViewStyle>;
    submitButtonStyling?: StyleProp<PressableProps>;
    submitTextStyling?: StyleProp<TextStyle>;
  };
  onSubmit: (values: Record<string, string>) => void;
};

// Props for password fields
export type PasswordFieldProps = TextFieldProps & {
  rules: PasswordRule[];
};

// Props for text fields
export type TextFieldProps = TextInputProps & {
  field: RegistrationField;
};
