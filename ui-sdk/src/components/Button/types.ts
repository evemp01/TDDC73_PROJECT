import { PressableProps, TextProps } from "react-native";

export type ButtonVariant = "default" | "outline" | "link";

export type ButtonProps = PressableProps & {
  variant?: ButtonVariant;
  disabled?: boolean;
};

export type ButtonTextProps = TextProps & {
  variant?: ButtonVariant;
};
