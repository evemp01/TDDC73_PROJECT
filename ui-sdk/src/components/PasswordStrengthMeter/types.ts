import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

// Definition of a password rule
export type PasswordRule = {
  id: string;
  label: string;
  test: (password: string) => boolean;
};

// Props for the PasswordStrengthMeter component
export type PasswordStrengthProps = {
  password: string;
  rules: PasswordRule[];
  style?: PasswordContainerStyle;
  icons?: PasswordRuleIcons;
};

// Icons to represent passed and failed rules
export type PasswordRuleIcons = {
  passed: ReactNode;
  failed: ReactNode;
};

// Styling options for the PasswordStrengthMeter component
type PasswordContainerStyle = {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  ruleStyling?: RuleStyling;
};

// Styling options for individual rules
export type RuleStyling = {
  ruleRow?: StyleProp<ViewStyle>;
  ruleText?: StyleProp<TextStyle>;
  textPassed?: StyleProp<TextStyle>;
  textFailed?: StyleProp<TextStyle>;
};

// Props for the RuleComponent
export type RuleComponentType = {
  rule: PasswordRule;
  password: string;
  passString?: string;
  failString?: string;
  style?: RuleStyling;
  icons?: PasswordRuleIcons;
};
