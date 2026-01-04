import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";
import {
  AccountRegistrationProps,
  DateFieldProps,
  PasswordFieldProps,
  RegistrationField,
} from "./types";

export function AccountRegistration({
  fields,
  passwordRules,
}: AccountRegistrationProps) {
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

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
            <PasswordFieldComponent
              key={field.id}
              field={field}
              passwordValue={password}
              onPasswordChange={setPassword}
              passwordRules={passwordRules}
            />
          );
        }

        // Date fields
        else if (field.type === "date") {
          return (
            <DateFieldComponent
              key={field.id}
              field={field}
              date={date}
              onDateChange={setDate}
            />
          );
        } else {
          console.error(`Unknown field type: ${field.type}`);
          return null;
        }
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

function PasswordFieldComponent({
  field,
  passwordValue,
  onPasswordChange,
  passwordRules,
}: PasswordFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{field.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={field.placeholder}
        secureTextEntry={true}
        value={passwordValue}
        onChangeText={onPasswordChange}
      />

      <PasswordStrengthMeter password={passwordValue} rules={passwordRules} />
    </View>
  );
}

function DateFieldComponent({ field, date, onDateChange }: DateFieldProps) {
  return (
    <View key={field.id} style={styles.fieldContainer}>
      <Text style={styles.label}>{field.label}</Text>

      <TextInput
        style={styles.input}
        placeholder={field.placeholder || "YYYY-MM-DD"}
        keyboardType="numeric"
        value={date}
        onChangeText={(text) => onDateChange(handleDateChange(text))}
        maxLength={10}
      />
    </View>
  );
}

const handleDateChange = (text: string) => {
  // Tar bort allt som inte är siffror
  const cleaned = text.replace(/\D/g, "");

  let formatted = cleaned;

  if (cleaned.length > 4) {
    // Lägg till bindestreck efter ÅÅÅÅ
    formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
  }
  if (cleaned.length > 6) {
    // Lägg till bindestreck efter MM
    formatted = `${formatted.slice(0, 7)}-${formatted.slice(7, 9)}`;
  }

  // Uppdatera state (max 10 tecken: ÅÅÅÅ-MM-DD)
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
  },
});
