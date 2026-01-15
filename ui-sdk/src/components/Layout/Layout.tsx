import React, { Children, Fragment } from "react";
import { View, ViewStyle } from "react-native";
import { StackProps } from "./types";

function BaseStack({ children, spacing = 0, align = "flex-start", justify = "flex-start", direction, legacy, style, ...props }: StackProps & { direction: "row" | "column" }) {
  const isRow = direction === "row";

  const renderChildren = () => {
    if (!legacy) return children;

    const childArray = Children.toArray(children).filter(Boolean);

    return childArray.map((child, index) => (
      <Fragment key={index}>
        {child}
        {index < childArray.length - 1 && <View style={isRow ? { width: spacing } : { height: spacing }} />}
      </Fragment>
    ));
  };

  const containerStyle: ViewStyle = {
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    ...(legacy ? {} : { gap: spacing }),
  };

  return (
    <View style={[containerStyle, style]} {...props}>
      {renderChildren()}
    </View>
  );
}

const Row = (props: StackProps) => <BaseStack {...props} direction="row" />;

const Column = (props: StackProps) => <BaseStack {...props} direction="column" />;

export { Column, Row };
