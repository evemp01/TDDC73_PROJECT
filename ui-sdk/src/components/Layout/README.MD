# Layout Components

Components designed to manage spatial distribution and alignment of child elements using flexbox layouts or empty views.

## Usage

```js
import { Row, Column } from "ui-sdk";

// Example of Row (horizontal layout)
function RowAlignment() {
  return (
    <Row spacing={32} justify="center" align="center">
      <View />
      <View />
    </Row>
  );
}

// Example of Column (vertical layout)
function ColumnAlignment() {
  return (
    <Column spacing={16} justify="flex-start" align="stretch">
      <View />
      <View />
    </Column>
  );
}
```

## API Reference

**Main Props (`StackProps`)**

Both `Row` and `Column` utilize `StackProps` and inherit standard React Native `ViewProps`.

| Prop    | Type                            | Description                                                                                       |
| ------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| spacing | `number`                        | The gap distance between child elements.                                                          |
| align   | `FlexStyle["alignItems"]`       | Alignment of items along the cross axis (e.g., 'center', 'flex-start').                           |
| justify |  `FlexStyle["justifyContent"]`  | Alignment of items along the main axis (e.g., 'space-between', 'center').                         |
| legacy  | `boolean`                       | If true, uses manual spacers instead of the flexbox gap property (useful for older environments). |
