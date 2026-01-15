import { createContext } from "react";
import { ButtonVariant } from "./types";

type ButtonContextValue = {
  variant: ButtonVariant;
  disabled?: boolean;
};

export const ButtonContext = createContext<ButtonContextValue | null>(null);
