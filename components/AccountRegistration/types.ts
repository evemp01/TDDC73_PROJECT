import { PasswordRule } from "../PasswordStrengthMeter/types";

export type RegistrationField = {
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
//   onSubmit:
};