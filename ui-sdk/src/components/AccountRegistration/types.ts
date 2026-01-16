import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { ButtonProps } from "../Button/types";
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
    submitTextStyling?: StyleProp<TextStyle>;
  };
  submitButtonProps?: ButtonProps;
  onSubmit: (values: Record<string, string>) => void;
};

// Props for password fields
export type PasswordFieldProps = RegistrationField & {
  rules: PasswordRule[];
};
