import { RegistrationField } from "@/components/AccountRegistration/types";
import { PasswordRule } from "@/components/PasswordStrengthMeter/types";
import { Text, View } from "react-native";
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";

const fields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
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

const rules: PasswordRule[] = [
  {
    id: "1",
    label: "At least 8 characters",
    test: (p: string) => p.length >= 8,
  },
  { 
    id: "2", 
    label: "At least one digit", 
    test: (p: string) => /\d/.test(p) },
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
