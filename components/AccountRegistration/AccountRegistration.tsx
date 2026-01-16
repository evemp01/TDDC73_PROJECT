import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { PasswordStrengthMeter } from "../PasswordStrengthMeter/PasswordStrengthMeter";
import { AccountRegistrationProps, PasswordFieldProps, RegistrationField } from "./types";

// Main component for account registration form
export function AccountRegistration({ confirmationText = "Sign Up", ...props }: AccountRegistrationProps) {
  // State to hold form data and error messages
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle input changes and update form data state
  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Find all required fields that are missing
    const missingFields = props.fields.filter((field) => field.required && !formData[field.id]);

    // If there are missing required fields, set an error message
    if (missingFields.length > 0) {
      const fieldNames = missingFields.map((f) => f.label).join(", ");
      setErrorMessage(`Required field(s): ${fieldNames}`);
      return;
    }

    // Find the password field in the configuration
    const passwordField = props.fields.find((f) => f.type === "password");

    // If a password field exists, validate it against the provided rules
    if (passwordField) {
      const passwordValue = formData[passwordField.id] || "";
      const brokenRules = props.passwordRules.filter((rule) => !rule.test(passwordValue));

      if (brokenRules.length > 0) {
        const errorMessages = brokenRules.map((r) => r.label).join("\n");
        setErrorMessage(`Password is too weak, these rules are not met: ${errorMessages}`);
        return;
      }
    }
    // If all validations pass, clear error messages and call onSubmit
    setErrorMessage("");
    props.onSubmit(formData);
  };

  return (
    <View style={[styles.container, props.styling?.containerStyling]}>
      {props.fields.map((field) => {
        const currentValue = formData[field.id] || "";

        // Common props for all field types
        const commonProps = {
          key: field.id,
          field: field,
          value: currentValue,
          style: field.style,
          ...field,
        };

        // Text fields
        if (field.type === "text") {
          return <TextFieldComponent {...commonProps} key={field.id} onChangeText={(value) => handleInputChange(field.id, value)} testID={`input-${field.id}`} />;
        }

        // Password fields
        else if (field.type === "password") {
          return <PasswordFieldComponent {...commonProps} key={field.id} rules={props.passwordRules} testID={`input-${field.id}`} onChangeText={(value) => handleInputChange(field.id, value)} />;
        }

        // Date fields
        else if (field.type === "date") {
          return <DateFieldComponent {...commonProps} key={field.id} testID={`input-${field.id}`} onChangeText={(value) => handleInputChange(field.id, handleDateChange(value))} />;
        } else {
          console.error(`Unknown field type: ${field.type}`);
          return null;
        }
      })}

      <View style={styles.buttonContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
        <Pressable testID="submit-button" style={[styles.submitButton, props.styling?.submitButtonStyling]} onPress={handleSubmit}>
          <Text accessibilityLabel={confirmationText} style={[styles.submitText, props.styling?.submitTextStyling]}>
            {confirmationText}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function TextFieldComponent({ label, required, placeholder, value, onChangeText, style, ...rest }: RegistrationField) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {label}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput {...rest} placeholder={placeholder} style={[styles.input, style]} value={value} onChangeText={onChangeText} autoCapitalize="none" />
    </View>
  );
}

function PasswordFieldComponent({ label, required, placeholder, value, onChangeText, rules, style, ...rest }: PasswordFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {label}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput {...rest} style={[styles.input, style]} placeholder={placeholder} secureTextEntry={true} value={value} onChangeText={onChangeText} autoCapitalize="none" />
      <PasswordStrengthMeter password={value ?? ""} rules={rules} />
    </View>
  );
}

function DateFieldComponent({ label, required, placeholder, value, onChangeText, style, ...rest }: RegistrationField) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>
        {label}
        {required && <Text style={{ color: "red" }}> *</Text>}
      </Text>
      <TextInput {...rest} style={[styles.input, style]} placeholder={placeholder || "YYYYMMDD"} keyboardType="numeric" value={value} onChangeText={onChangeText} maxLength={10} />
    </View>
  );
}

const handleDateChange = (text: string) => {
  // Replace non-digit characters
  const cleaned = text.replace(/\D/g, "");

  let formatted = cleaned;

  // Add dash after year
  if (cleaned.length > 4) {
    formatted = `${cleaned.slice(0, 4)}-${cleaned.slice(4)}`;
  }
  // Add dash after month
  if (cleaned.length > 6) {
    formatted = `${formatted.slice(0, 7)}-${formatted.slice(7, 9)}`;
  }
  // Limit to 10 characters (YYYY-MM-DD)
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
