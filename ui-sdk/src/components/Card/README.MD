# Example integration of Card

Example code integration of the card component:

```js
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "ui-sdk";

function foo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>A card title</CardTitle>
        <CardDescription>A card description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card content goes here</Text>
      </CardContent>
    </Card>
  );
}
```
