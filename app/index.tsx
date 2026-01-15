import { RegistrationField } from "@/components/AccountRegistration/types";
import { PasswordRule } from "@/components/PasswordStrengthMeter/types";
import { View } from "react-native";
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";

// Example configuration for account registration
// Here we define the fields we want in our registration form
// The fields will be displayed in the order they are defined here

/**
 * @param id - Unique identifier for the field
 * @param label - Display label for the field
 * @param placeholder - Placeholder text for the input (optional)
 * @param type - Type of the field: "text", "password", or "date"
 * @param required - Whether the field is required (default: false)
 * And any other properties related to text input (e.g., maxLength, styles and onChangeText)
 */
const fields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
    maxLength: 8,
  },
  {
    id: "name1",
    label: "Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    id: "email1",
    label: "Email",
    placeholder: "example@mail.com",
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

// Example password rules for the password strength meter
// These rules will be used to validate the password strength
// You can customize these rules as needed
/**
 * @param id - Unique identifier for the rule
 * @param label - Description of the rule
 * @param test - Function that tests if the password meets the rule
 */
const rules: PasswordRule[] = [
  {
    id: "1",
    label: "At least 8 characters",
    test: (p: string) => p.length >= 8,
  },
  {
    id: "2",
    label: "At least one digit",
    test: (p: string) => /\d/.test(p),
  },
];

export default function Index() {
  return (
    <View style={{ padding: 20 }}>
      <AccountRegistration
        fields={fields}
        passwordRules={rules}
        onSubmit={(values) => console.log(values)}
      />
    </View>
  );
}
