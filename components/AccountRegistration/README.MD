# Account Registration Component

Form that handles input fields and password strength checking.

## Usage

```tsx
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";
import { RegistrationField } from "../components/AccountRegistration/types";

// 1. Define the fields
const fields: RegistrationField[] = [
  {
    id: "username",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
  },
  {
    id: "dob",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Choose your password",
    type: "password",
    required: true,
  },
];

// 2. Define password rules (imported or defined locally)
const rules = [
  { id: "len", label: "Min 8 chars", test: (p: string) => p.length >= 8 },
];

export default function RegisterScreen() {
  return (
    <AccountRegistration
      fields={fields}
      passwordRules={rules}
      onSubmit={(values) => console.log("Form submitted:", values)}
      confirmationText="Register Now"
    />
  );
}
```

## API Reference

### Main Props (`AccountRegistrationProps`)

| Prop                 | Type                  | Description                                                                                              | Required |
| :------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------- | :------- |
| **fields**           | `RegistrationField[]` | Configuration array for all input fields.                                                                | Yes      |
| **passwordRules**    | `PasswordRule[]`      | Array of rules for the password strength meter.                                                          | Yes      |
| **onSubmit**         | `(values) => void`    | Callback function called when the form is valid and submitted. Returns an object with field IDs as keys. | Yes      |
| **confirmationText** | `string`              | Custom text for the submit button (default: "Sign Up").                                                  | No       |
| **styling**          | `object`              | Custom styling object for the form and its children.                                                     | No       |

### Configuration Objects

#### `RegistrationField`

Defines the behavior and look of a single input field. This type extends React Native's `TextInputProps`, so you can also pass standard props like `maxLength`, `autoCorrect`, etc.

| Property      | Type      | Description                                                              | Required |
| :------------ | :-------- | :----------------------------------------------------------------------- | :------- |
| `id`          | `string`  | Unique identifier for the field (used in the `values` object on submit). | Yes      |
| `label`       | `string`  | The visible label above the input field.                                 | Yes      |
| `type`        | `string`  | One of: `"text"`, `"date"`, or `"password"`.                             | Yes      |
| `placeholder` | `string`  | Placeholder text shown when empty.                                       | No       |
| `required`    | `boolean` | If true, the form cannot be submitted without this field. (Default: false)               | No       |

---

## Customization

### Styling (`styling`)

The `styling` prop accepts an object to customize specific parts of the form.

```ts
type AccountRegistrationStyle = {
  containerStyling?: StyleProp<ViewStyle>; // Main wrapper style
  submitButtonStyling?: StyleProp<ViewStyle>; // Submit button style
  submitTextStyling?: StyleProp<TextStyle>; // Submit button text style
  passwordStrengthStyling?: PasswordStrengthStyle; // Styling for the nested password meter
};
```

#### Example

```js
<AccountRegistration
  fields={fields}
  passwordRules={rules}
  onSubmit={handleSubmit}
  styling={{
    containerStyling: { padding: 20, backgroundColor: "#fff" },
    submitButtonStyling: { backgroundColor: "blue", borderRadius: 8 },
    submitTextStyling: { fontSize: 18, fontWeight: "bold" },
  }}
/>
```
