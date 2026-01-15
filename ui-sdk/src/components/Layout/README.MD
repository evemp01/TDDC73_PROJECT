# Example integration of Layout components

Example code integration of the layout components:

```js
import { Row, Column } from "ui-sdk";

function LegacyRowAlignment() {
  return (
    <Row spacing={32} justify="center" align="center" style={{ width: "100%" }} legacy>
      {your content}
    </Row>
  );
}

function LegacyColumnAlignment() {
  return (
    <Row spacing={32} justify="center" align="center" style={{ width: "100%" }} legacy>
      {your content}
    </Row>
  );
}

function RowAlignment() {
  return (
    <Row spacing={32} justify="center" align="center" style={{ width: "100%" }}>
      {your content}
    </Row>
  );
}

function ColumnAlignment() {
  return (
    <Column spacing={32} justify="center" align="center" style={{ width: "100%" }}>
      {your content}
    </Column>
  );
}
```
