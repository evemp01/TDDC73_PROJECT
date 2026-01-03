import { Button, View, TextInput, Text, StyleSheet } from "react-native";
import { AccountRegistrationProps, RegistrationField } from "./types";
import { useState } from "react";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";
import { PasswordRule } from "../PasswordStrengthMeter/types";

export function AccountRegistration({ fields, passwordRules }: AccountRegistrationProps) {
  const [password, setPassword] = useState("");
  const [dateString, setDateString] = useState("");

  return (
    <View style={styles.container}>
      {fields.map((field) => {

        // Text fields
        if (field.type === "text") {
          return <TextFieldComponent key={field.id} field={field} />;
        }

        // Password fields
        else if (field.type === "password") {
          return <PasswordFieldComponent key={field.id} field={field} password={password} setPassword={setPassword} passwordRules={passwordRules} />;
        }

        // Date fields
        if (field.type === "date") {
          return (
            <View key={field.id} style={styles.fieldContainer}>
              <Text style={styles.label}>{field.label}</Text>
              
              <TextInput
                style={styles.input} // Nu ser den exakt ut som de andra fälten
                placeholder={field.placeholder || "YYYY-MM-DD"}
                keyboardType="numeric"
                value={dateString}
                onChangeText={(text) => setDateString(handleDateChange(text))}
                maxLength={10} // Förhindrar att man skriver mer än YYYY-MM-DD
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

function PasswordFieldComponent(props: { field: RegistrationField, password: string, setPassword: (pw: string) => void, passwordRules: PasswordRule[] }) {
  return(
    <View key={props.field.id} style={styles.fieldContainer}>
      <Text style={styles.label}>{props.field.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.field.placeholder}
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
const handleDateChange = (text: string) => {
  // 1. Ta bort allt som inte är siffror (om användaren råkar skriva bokstäver)
  const cleaned = text.replace(/\D/g, "");
  
  // 2. Bygg upp strängen med bindestreck
  let formatted = cleaned;
  if (cleaned.length > 4) {
    // Lägg till bindestreck efter ÅÅÅÅ
    formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
  }
  if (cleaned.length > 6) {
    // Lägg till bindestreck efter MM
    formatted = `${formatted.slice(0, 7)}-${formatted.slice(7, 9)}`;
  }

  // 3. Uppdatera state (max 10 tecken: ÅÅÅÅ-MM-DD)
  return formatted.slice(0, 10);
};

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
