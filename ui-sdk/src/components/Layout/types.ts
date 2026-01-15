import { FlexStyle, ViewProps } from "react-native";

export type StackProps = ViewProps & {
  spacing?: number;
  align?: FlexStyle["alignItems"];
  justify?: FlexStyle["justifyContent"];
  legacy?: boolean;
};
