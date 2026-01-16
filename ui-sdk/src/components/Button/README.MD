# Button Component

A flexible button component that supports multiple visual variants and handles internal states for press and disabled interactions.

## Usage

```js
import { Button, ButtonText } from "ui-sdk";

// Default/Normal button
function DefaultButton() {
  return (
    <Button onPress={() => console.log("Pressed!")}>
      <ButtonText>Click Me</ButtonText>
    </Button>
  );
}

// Outline variant
function OutlineButton() {
  return (
    <Button variant="outline">
      <ButtonText>Outline Button</ButtonText>
    </Button>
  );
}

// Disabled state
function DisabledButton() {
  return (
    <Button disabled>
      <ButtonText>Cannot Click</ButtonText>
    </Button>
  );
}
```

## API Reference

**`Button` Props**

Inherits from React Native's `PressableProps`.

| Prop     | Type                            | Description                                                         |
| -------- | ------------------------------- | ------------------------------------------------------------------- |
| variant  |  `"default", "outline", "link"` | Determines the visual style of the button. Defaults to `"default"`. |
| disabled | boolean                         | If true, the button becomes inactive and visually faded.            |

**`ButtonText` Props**

Inherits from React Native's `TextProps`.

| Prop    | Type                            | Description                                                                                       |
| ------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| variant |  `"default", "outline", "link"` | Matches text color with the button variant. Typically inherited from the parent `Button` context. |
