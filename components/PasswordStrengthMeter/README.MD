# Using the PasswordStrength meter

Example: Importing and using the PasswordStrength component:

```js
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";

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

const [password, setPassword] = useState("");

function Component() {
  return (
    <PasswordStrengthMeter password={password} rules={passwordRules} />
  )
}
```
