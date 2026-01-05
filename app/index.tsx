import { RegistrationField } from "@/components/AccountRegistration/types";
import { PasswordRule } from "@/components/PasswordStrengthMeter/types";
import { Text, View } from "react-native";
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";

const fields: RegistrationField[] = [
  { id: "email1", label: "Email", type: "text" },
  { id: "dob1", label: "Date of Birth", placeholder: "ÅÅÅÅ-MM-DD", type: "date"},
  { id: "name1", label: "Name", placeholder: "Enter your name", type: "text" },
  { id: "p1", label: "Password", type: "password" },
];

const rules: PasswordRule[] = [
  { id: "1", label: "Minst 8 tecken", test: (p: string) => p.length >= 8 },
  { id: "2", label: "Minst en siffra", test: (p: string) => /\d/.test(p) },
];

export default function Index() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginTop: 20 }}>Account Registration:</Text>
      <AccountRegistration
        fields={fields}
        passwordRules={rules}
        onSubmit={(values) => console.log(values)}
      />
    </View>
  );
}
