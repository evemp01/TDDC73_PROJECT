import { useState } from "react";
import { View, TextInput } from "react-native";
import { PasswordStrengthMeter } from "../components/PasswordStrengthMeter/PasswordStrengthMeter";

export default function Index() {
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
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
    </View>
  );
}
