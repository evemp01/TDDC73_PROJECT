import { Button, View, TextInput, Text, StyleSheet } from "react-native";
import { AccountRegistrationProps, RegistrationField } from "./types";
import { useState } from "react";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";

export function AccountRegistration({ fields, passwordRules }: AccountRegistrationProps) {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      {fields.map((field) => {
        // Text fields
        if (field.type === "text") {
          return <TextFieldComponent key={field.id} field={field} />;
        }

        // Password fields
        if (field.type === "password") {
          return (
            <View key={field.id} style={styles.fieldContainer}>
              <Text style={styles.label}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                secureTextEntry={true} // Döljer tecknen
                value={password}
                onChangeText={setPassword} // Uppdaterar lösenordet när man skriver
              />
              {/* Här lägger vi in din mätare och skickar med lösenordet + reglerna */}
              <PasswordStrengthMeter
                password={password}
                rules={passwordRules}
              />
            </View>
          );
        }
        return null;
      })}

      <View style={styles.buttonContainer}>
        <Button title="Sign up" accessibilityLabel="Sign up" />
      </View>
    </View>
  );
}

function TextFieldComponent(props: { field: RegistrationField }) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{props.field.label}</Text>

      <TextInput placeholder={props.field.placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  fieldContainer: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },

  buttonContainer: {
    marginTop: 8,
  },
});
