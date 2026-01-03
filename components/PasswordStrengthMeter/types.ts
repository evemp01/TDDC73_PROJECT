import { ReactNode } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type PasswordRule = {
  id: string;
  label: string;
  test: (password: string) => boolean;
};

export type PasswordStrengthProps = {
  password: string;
  rules: PasswordRule[];
  style?: PasswordContainerStyle;
  icons?: PasswordRuleIcons;
};

export type PasswordRuleIcons = {
  passed: ReactNode;
  failed: ReactNode;
};

type PasswordContainerStyle = {
  container?: StyleProp<ViewStyle>;
  title?: StyleProp<TextStyle>;
  ruleStyling?: RuleStyling;
};

export type RuleStyling = {
  ruleRow?: StyleProp<ViewStyle>;
  ruleText?: StyleProp<TextStyle>;
  textPassed?: StyleProp<TextStyle>;
  textFailed?: StyleProp<TextStyle>;
};

export type RuleComponentType = {
  rule: PasswordRule;
  password: string;
  passString?: string;
  failString?: string;
  style?: RuleStyling;
  icons?: PasswordRuleIcons;
};
