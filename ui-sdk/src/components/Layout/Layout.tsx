import { Children, Fragment } from "react";
import { View, ViewStyle } from "react-native";
import { StackProps } from "./types";

function BaseStack({ children, spacing = 0, align = "flex-start", justify = "flex-start", direction, legacy, style, ...props }: StackProps & { direction: "row" | "column" }) {
  const isRow = direction === "row";

  const renderChildren = () => {
    if (!legacy) return children;

    const items = Children.toArray(children);
    const spacerStyle = isRow ? { width: spacing } : { height: spacing };

    return items.map((child, index) => (
      <Fragment key={index}>
        {/* Same as <></> just that we need the key prop */}
        {child}
        {index < items.length - 1 && <View style={spacerStyle} />}
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
