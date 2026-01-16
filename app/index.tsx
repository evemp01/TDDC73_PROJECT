import { RegistrationField } from "@/components/AccountRegistration/types";
import { PasswordRule } from "@/components/PasswordStrengthMeter/types";
import { ScrollView, Text, TextInputProps, View } from "react-native";
import { AccountRegistration } from "../components/AccountRegistration/AccountRegistration";

// Example configuration for account registration
// Here we define the fields we want in our registration form
// The fields will be displayed in the order they are defined here

/**
 * @param id - Unique identifier for the field
 * @param label - Display label for the field
 * @param placeholder - Placeholder text for the input (optional)
 * @param type - Type of the field: "text", "password", or "date"
 * @param required - Whether the field is required (default: false)
 * And any other properties related to text input (e.g., maxLength, styles and onChangeText)
 */
const fieldStyling: TextInputProps["style"] = {
  borderRadius: 100,
  borderWidth: 1,
  borderColor: "#2ecc71",
  paddingHorizontal: 15,
  paddingVertical: 10,
};

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

const styledFields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "name1",
    label: "Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "email1",
    label: "Email",
    placeholder: "example@mail.com",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "dob1",
    label: "Date of Birth",
    type: "date",
    style: fieldStyling,
  },
  {
    id: "p1",
    label: "Password",
    placeholder: "Choose your password",
    type: "password",
    required: true,
    style: fieldStyling,
  },
];

// Example password rules for the password strength meter
// These rules will be used to validate the password strength
// You can customize these rules as needed
/**
 * @param id - Unique identifier for the rule
 * @param label - Description of the rule
 * @param test - Function that tests if the password meets the rule
 */
const rules: PasswordRule[] = [
  {
    id: "1",
    label: "At least 8 characters",
    test: (p: string) => p.length >= 8,
  },
  {
    id: "2",
    label: "At least one digit",
    test: (p: string) => /\d/.test(p),
  },
];

export default function Index() {
  return (
    // <View style={{ padding: 20 }}>
    //   <AccountRegistration
    //     fields={fields}
    //     passwordRules={rules}
    //     onSubmit={(values) => console.log(values)}
    //   />
    // </View>
    <ScrollView
      style={{ flex: 1, padding: 20 }}
      contentContainerStyle={{ paddingBottom: 50 }}>
      {/* ---------------- EXAMPLE 1: DEFAULT STYLING ---------------- */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 40,
        }}>
        1. Default Styling
      </Text>
      <Text style={{ marginBottom: 10, color: "#666" }}>
        This is how the component looks "out of the box" without any extra
        styling.
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
        }}>
        <AccountRegistration
          fields={fields}
          passwordRules={rules}
          onSubmit={(values) => console.log("Default submit:", values)}
        />
      </View>

      {/* ---------------- EXAMPLE 2: CUSTOM STYLING ---------------- */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 40,
        }}>
        2. Custom Styling
      </Text>
      <Text style={{ marginBottom: 10, color: "#666" }}>
        Here we override the look for the form, the submit button, and the
        password meter.
      </Text>

      <AccountRegistration
        fields={styledFields}
        passwordRules={rules}
        onSubmit={(values) => console.log("Custom submit:", values)}
        confirmationText="CREATE ACCOUNT NOW"
        styling={{
          // Style the main form container
          containerStyling: {
            backgroundColor: "#ffffff", // Dark blue background
            borderRadius: 15,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 8, // Shadow on Android
          },

          // Style the submit button
          submitButtonStyling: {
            backgroundColor: "#27ae60", // Green button
            borderRadius: 50,
            paddingVertical: 15,
            marginTop: 20,
            borderWidth: 2,
            borderColor: "#2ecc71",
          },

          // Style the button text
          submitTextStyling: {
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: 1.5,
            color: "white",
          },

          // Style the Password Strength Meter
          passwordStrengthStyling: {
            // The box around the rules
            container: {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
              padding: 15,
              borderRadius: 8,
              marginTop: 15,
              borderLeftWidth: 4,
              borderLeftColor: "#f1c40f", // Yellow border line
            },
            // The title "Password must"
            title: {
              color: "#f1c40f", // Yellow text
              fontSize: 14,
              fontWeight: "900",
              textTransform: "uppercase",
              marginBottom: 10,
            },
            // The rules themselves
            ruleStyling: {
              // When the rule is passed
              textPassed: {
                color: "#2ecc71", // Light green
                fontWeight: "bold",
                textDecorationLine: "line-through", // Strike through the text
              },
              // When the rule is FAILED
              textFailed: {
                color: "#000000", // Grayish text
              },
            },
          },
        }}
      />

      {/* Extra space at the bottom */}
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}
