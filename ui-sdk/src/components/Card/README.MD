# Card Component

A container component for grouping related information with a defined structure consisting of a header, title, description, and content area.

## Usage

```js
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "ui-sdk";
import { Text } from "react-native";

function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the content.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Main content or body text goes here.</Text>
      </CardContent>
    </Card>
  );
}
```

## API Reference

The Card system consists of several specialized components that all support standard styling via the `style` prop.

| Component       |  Base Type (React Native) |  Description                                                             |
| --------------- | ------------------------- | ------------------------------------------------------------------------ |
| Card            |  `ViewProps`              | Main wrapper with shadow, border, and background.                        |
| CardHeader      |  `ViewProps`              | Top section with built-in padding and vertical spacing between children. |
| CardTitle       |  `TextProps`              | Bolded text for the card's heading.                                      |
| CardDescription | `TextProps`               | Subtle text for secondary information.                                   |
| CardContent     |  `ViewProps`              | The lower container where the primary body content is placed.            |
