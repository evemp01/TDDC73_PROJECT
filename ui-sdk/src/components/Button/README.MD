# Example integration of Button

Example code integration of the Button component:

```js
import { Button, ButtonText } from "ui-sdk";

// Normal/Default button
function foo1() {
  return (
    <Button>
      <ButtonText>Button 1</ButtonText>
    </Button>
  );
}

// Outline button
function foo1() {
  return (
    <Button variant="outline">
      <ButtonText>Button 1</ButtonText>
    </Button>
  );
}

// Link button
function foo1() {
  return (
    <Button variant="link">
      <ButtonText>Button 1</ButtonText>
    </Button>
  );
}

// Disabled prop
function foo1() {
  return (
    <Button variant="default" disabled>
      <ButtonText>Button 1</ButtonText>
    </Button>
  );
}
```
