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
        else if (field.type === "password") {
          return (
            <View key={field.id} style={styles.fieldContainer}>
              <Text style={styles.label}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder={field.placeholder}
                secureTextEntry={true} 
                value={password}
                onChangeText={setPassword} 
              />
              
              <PasswordStrengthMeter
                password={password}
                rules={passwordRules}
              />
            </View>
          );
        }

        // Date fields
        else if (field.type === "date") {
          return (
            <View key={field.id} style={styles.fieldContainer}>
              <Text style={styles.label}>{field.label}</Text>

              <View style={styles.dateInputGroup}>
                <TextInput
                  style={[styles.input, styles.dateInputSmall]}
                  placeholder="YYYY"
                  keyboardType="numeric"
                  maxLength={4}
                  onChangeText={(val) => console.log("År:", val)}
                />
                <TextInput
                  style={[styles.input, styles.dateInputSmall]}
                  placeholder="MM"
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(val) => console.log("Månad:", val)}
                />
                <TextInput
                  style={[styles.input, styles.dateInputSmall]}
                  placeholder="DD"
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={(val) => console.log("Dag:", val)}
                />
              </View>
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

  dateInputGroup: {
    flexDirection: "row",
  },

  dateInputSmall: { 
    marginHorizontal: 4, 
    textAlign: "center", 
    padding: 0,
  }
});
