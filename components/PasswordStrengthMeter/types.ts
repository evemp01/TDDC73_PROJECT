export type PasswordRule = {
  id: string;
  label: string;
  test: (password: string) => boolean;
};

export type PasswordStrengthMeterProps = {
  password: string;
  rules: PasswordRule[];
};
