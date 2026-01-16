# Password Strength Meter Component

A flexible component that visualizes password strength based on a set of custom rules.

## Usage

```tsx
import { useState } from "react";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter/PasswordStrengthMeter";

// 1. Define your rules
const passwordRules = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    id: "digit",
    label: "Contains a number",
    test: (password: string) => /\d/.test(password),
  },
];

export default function App() {
  const [password, setPassword] = useState("");

  return (
    // 2. Pass password and rules to the component
    <PasswordStrengthMeter password={password} rules={passwordRules} />
  );
}
```

## API Reference

### Main Props (`PasswordStrengthProps`)

| Prop         | Type             | Description                                    | Required |
| :----------- | :--------------- | :--------------------------------------------- | :------- |
| **password** | `string`         | The current password string to evaluate.       | Yes      |
| **rules**    | `PasswordRule[]` | An array of rule objects (see below).          | Yes      |
| **style**    | `object`         | Custom styling for the container and rules.    | No       |
| **icons**    | `object`         | Custom React nodes/icons for pass/fail states. | No       |

### Configuration Objects

#### `PasswordRule`

Define the validation logic.

| Property | Type                            | Description                                                           |
| :------- | :------------------------------ | :-------------------------------------------------------------------- |
| `id`     | `string`                        | Unique identifier for the rule.                                       |
| `label`  | `string`                        | The text displayed to the user describing the rule.                   |
| `test`   | `(password: string) => boolean` | A function that returns `true` if the rule is met, otherwise `false`. |

---

## Customization

### Styling

The `style` prop accepts an object with the following structure to override the default look.

```ts
type PasswordContainerStyle = {
  container?: StyleProp<ViewStyle>; // The outer wrapper
  title?: StyleProp<TextStyle>; // The "Password must" title
  ruleStyling?: {
    ruleRow?: StyleProp<ViewStyle>; // The row for a single rule
    textPassed?: StyleProp<TextStyle>; // Text style when rule passes
    textFailed?: StyleProp<TextStyle>; // Text style when rule fails
  };
};
```

#### Example

```js
<PasswordStrengthMeter
  password={password}
  rules={rules}
  style={{
    container: { backgroundColor: "#f0f0f0", padding: 10 },
    title: { fontSize: 18, color: "#333" },
    ruleStyling: {
      textPassed: { color: "blue" }, // Turn text blue when passed
      textFailed: { color: "gray" },
    },
  }}
/>
```

### Icons

By default, the component uses text characters (✓ / ✗). You can replace these with custom components (like icons from a library).

```js
<PasswordStrengthMeter
  password={password}
  rules={rules}
  icons={{
    passed: <MyIcon name="check-circle" color="green" />,
    failed: <MyIcon name="close-circle" color="red" />,
  }}
/>
```
