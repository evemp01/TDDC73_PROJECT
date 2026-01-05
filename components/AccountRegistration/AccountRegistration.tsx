import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";
import {
  AccountRegistrationProps,
  PasswordFieldProps,
  TextFieldProps,
} from "./types";

export function AccountRegistration({
  confirmationText = "Sign Up",
  ...props
}: AccountRegistrationProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    // Hitta alla fält som är required men saknar värde i formData
    const missingFields = props.fields.filter(
      (field) => field.required && !formData[field.id]
    );

    if (missingFields.length > 0) {
      // Skapa ett felmeddelande
      const fieldNames = missingFields.map((f) => f.label).join(", ");
      document.getElementById(
        "error-text"
      )!.innerText = `Required field(s): ${fieldNames}`;
      return;
    }
    document.getElementById("error-text")!.innerText = "";
    props.onSubmit(formData);
  };

  return (
    <View style={[styles.container, props.styling?.containerStyling]}>
      {props.fields.map((field) => {
        const currentValue = formData[field.id] || "";

        const commonProps = {
          key: field.id,
          field: field,
          value: currentValue,
          style: field.style,
          ...field,
        };

        // Text fields
        if (field.type === "text") {
          return (
            <TextFieldComponent
              {...commonProps}
              key={field.id}
              onChangeText={(value) => handleInputChange(field.id, value)}
              testID={`input-${field.id}`}
            />
          );
        }

        // Password fields
        else if (field.type === "password") {
          return (
            <PasswordFieldComponent
              {...commonProps}
              key={field.id}
              rules={props.passwordRules}
              testID={`input-${field.id}`}
              onChangeText={(value) => handleInputChange(field.id, value)}
            />
          );
        }

        // Date fields
        else if (field.type === "date") {
          return (
            <DateFieldComponent
              {...commonProps}
              key={field.id}
              testID={`input-${field.id}`}
              onChangeText={(value) =>
                handleInputChange(field.id, handleDateChange(value))
              }
            />
          );
        } else {
          console.error(`Unknown field type: ${field.type}`);
          return null;
        }
      })}

      <View style={styles.buttonContainer}>
        <Text style={styles.errorText} id="error-text"></Text>
        <Pressable
          testID="submit-button"
          style={[styles.submitButton, props.styling?.submitButtonStyling]}
          onPress={handleSubmit}>
          <Text
            accessibilityLabel={confirmationText}
            style={[styles.submitText, props.styling?.submitTextStyling]}>
            {confirmationText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function TextFieldComponent({
  field,
  value,
  onChangeText,
  style,
  ...rest
}: TextFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {field.label}
        {field.required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput
        {...rest}
        placeholder={field.placeholder}
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
}

function PasswordFieldComponent({
  field,
  value,
  onChangeText,
  rules,
  style,
  ...rest
}: PasswordFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {field.label}
        {field.required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholder={field.placeholder}
        secureTextEntry={true}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
      <PasswordStrengthMeter password={value ?? ""} rules={rules} />
    </View>
  );
}

function DateFieldComponent({
  field,
  value,
  onChangeText,
  style,
  ...rest
}: TextFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {field.label}
        {field.required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput
        {...rest}
        style={[styles.input, style]}
        placeholder={field.placeholder || "YYYYMMDD"}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
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
  submitButton: {
    flex: 1,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#1a1a1aff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
  },
  errorText: {
    marginBottom: 10,
  },
});
