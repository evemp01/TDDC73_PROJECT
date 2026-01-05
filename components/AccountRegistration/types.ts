import { PressableProps, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { PasswordRule } from "../PasswordStrengthMeter/types";

export type RegistrationField = TextInputProps & {
  id: string;
  label: string;
  placeholder?: string;
  info?: string;
  type: "text" | "date" | "password";
  required?: boolean;
};

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

export type PasswordFieldProps = TextFieldProps & {
  rules: PasswordRule[];
};

export type TextFieldProps = TextInputProps & {
  field: RegistrationField;
};
