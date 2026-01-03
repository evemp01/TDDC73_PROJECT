import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter/PasswordStrengthMeter";

export default function Index() {
  const [password, setPassword] = useState("");
  const myRules = [
    { id: "1", label: "Minst 8 tecken", test: (p: string) => p.length >= 8 },
    { id: "2", label: "Minst en siffra", test: (p: string) => /\d/.test(p) },
  ];
  
  return (
    <View style={{ padding: 20 }}>
      <Text>Password Strength Meter:</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <PasswordStrengthMeter
        password={password}
        rules={[
          {
            id: "length",
            label: "Have at least 6 characters",
            test: (pw) => pw.length >= 6,
          },
          {
            id: "number",
            label: "Include at least 1 number",
            test: (pw) => /\d/.test(pw),
          },
        ]}
      />
      <Text style={{ marginTop: 20 }}>Account Registration:</Text>

      <AccountRegistration
        fields={[
          { id: "email1", label: "Email", type: "text" },
          { id: "dob1", label: "Date of Birth", placeholder:"ÅÅÅÅ-MM-DD", type: "date" },
          { id: "name1", label: "Name", placeholder: "Enter your name", type: "text" },
          { id: "p1", label: "Password", type: "password" },
        ]}
        passwordRules={myRules}
      />
    </View>
  );
}
