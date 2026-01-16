# Using the AccountRegistration form

Example: Using the AccountRegistration form:

```js
import { AccountRegistration } from "../components/AccountRegistration";
import { RegistrationField } from "../components/AccountRegistration/types";

const fields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
  },
  {
    id: "dob1",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "p1",
    label: "Password",
    placeholder: "Choose your password",
    type: "password",
    required: true,
  },
];

function Component() {
  return (
    <AccountRegistration
      fields={fields}
      passwordRules={rules}
      onSubmit={(values) => console.log(values)}
    />
  );
}
```

## Params and Types

### Input fields

Params for the fields:

```ts
type RegistrationField = TextInputProps & {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "date" | "password";
  required?: boolean;
};
```

| Param Name  | Description                                      |
| ----------- | ------------------------------------------------ |
| id          | Unique identifier for the field                  |
| label       | Label/Text for the field                         |
| placeholder | Placeholder text                                 |
| type        | Type of input                                    |
| required    | Boolean for if the field is required in the form |

And since it extends TextInputProps, you can also input stuff such as style, maxLength or any other prop that is apart of the [textinput props](https://reactnative.dev/docs/textinput).

### Form

Params for the form/Account registration form

```ts
type AccountRegistrationProps = {
  fields: RegistrationField[];
  passwordRules: PasswordRule[];
  confirmationText?: string;
  styling?: {
    containerStyling?: StyleProp<ViewStyle>;
    submitButtonStyling?: StyleProp<PressableProps>;
    submitTextStyling?: StyleProp<TextStyle>;
  };
  onSubmit: (values: Record<string, string>) => void;
};
```

| Param Name                  | Description                                                           |
| --------------------------- | --------------------------------------------------------------------- |
| fields                      | The fields that the form should have                                  |
| passwordRules               | Password rules the form should follow                                 |
| confirmationText            | Have the text of the button say somethings else rather than `sign up` |
| styling.containerStyling    | Styling of the main container                                         |
| styling.submitButtonStyling | Styling of the submit button                                          |
| styling.submitTextStyling   | Styling of the button text                                            |
| onSubmit                    | Function called when the form is submitted                            |
