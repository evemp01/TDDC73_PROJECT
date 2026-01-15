import React, { useContext } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ButtonContext } from "./ButtonContext";
import type { ButtonProps, ButtonTextProps, ButtonVariant } from "./types";

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDefault: {
    backgroundColor: "#1a1a1aff",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#1a1a1aff",
  },
  buttonLink: {
    backgroundColor: "transparent",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonPressed: {
    opacity: 0.85,
  },

  textBase: {
    fontSize: 16,
    fontWeight: "600",
  },
  textDefault: {
    color: "#ffffff",
  },
  textOutline: {
    color: "#1a1a1aff",
  },
  textLink: {
    color: "#1a1a1aff",
    borderBottomWidth: 3,
    borderBottomColor: "1a1a1aff",
  },
  textDisabled: {
    opacity: 0.9,
  },
});

const buttonVariantStyle: Record<ButtonVariant, object> = {
  default: styles.buttonDefault,
  outline: styles.buttonOutline,
  link: styles.buttonLink,
};

const textVariantStyle: Record<ButtonVariant, object> = {
  default: styles.textDefault,
  outline: styles.textOutline,
  link: styles.textLink,
};

function Button({ children, variant = "default", style: userStyle, disabled, ...props }: ButtonProps) {
  const variantStyle = buttonVariantStyle[variant];

  const composedStyle: ButtonProps["style"] = (state) => {
    const resolvedUserStyle = typeof userStyle === "function" ? userStyle(state) : userStyle;

    return [styles.buttonBase, variantStyle, disabled ? styles.buttonDisabled : null, state.pressed && !disabled ? styles.buttonPressed : null, resolvedUserStyle];
  };

  return (
    <ButtonContext.Provider value={{ variant, disabled }}>
      <Pressable {...props} disabled={disabled} accessibilityRole={props.accessibilityRole ?? "button"} style={composedStyle}>
        {children}
      </Pressable>
    </ButtonContext.Provider>
  );
}

function ButtonText({ variant: variantProp, disabled: disabledProp, style, ...props }: ButtonTextProps) {
  const ctx = useContext(ButtonContext);

  const variant = variantProp ?? ctx?.variant ?? "default";
  const disabled = disabledProp ?? ctx?.disabled ?? false;

  return <Text {...props} style={[styles.textBase, textVariantStyle[variant], disabled ? styles.textDisabled : null, style]} />;
}

export { Button, ButtonText };
