import {
  AccountRegistration,
  AccountRegistrationStyle,
  Button,
  ButtonText,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Column,
  PasswordRule,
  RegistrationField,
  Row,
} from "@/ui-sdk/src";
import { ScrollView, Text, TextInputProps, View } from "react-native";

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
    id: "username2",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "name2",
    label: "Name",
    placeholder: "Enter your full name",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "email2",
    label: "Email",
    placeholder: "example@mail.com",
    type: "text",
    required: true,
    style: fieldStyling,
  },
  {
    id: "dob2",
    label: "Date of Birth",
    type: "date",
    style: fieldStyling,
  },
  {
    id: "p2",
    label: "Password",
    placeholder: "Choose your password",
    type: "password",
    required: true,
    style: fieldStyling,
  },
];

const accountRegistrationStyle: AccountRegistrationStyle = {
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
    style: {
      backgroundColor: "#27ae60", // Green button
      borderRadius: 50,
      paddingVertical: 15,
      marginTop: 20,
      borderWidth: 2,
      borderColor: "#2ecc71",
    },
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
};

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
    <ScrollView style={{ padding: 20 }}>
      <Card>
        <CardContent>
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
          <Text style={{ marginBottom: 10, color: "#666" }}>This is how the component looks "out of the box" without any extra styling.</Text>

          <View>
            <AccountRegistration fields={fields} passwordRules={rules} onSubmit={(values) => console.log("Default submit:", values)} />
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
          <Text style={{ marginBottom: 10, color: "#666" }}>Here we override the look for the form, the submit button, and the password meter.</Text>

          <AccountRegistration
            fields={styledFields}
            passwordRules={rules}
            onSubmit={(values) => console.log("Custom submit:", values)}
            confirmationText="CREATE ACCOUNT NOW"
            styling={accountRegistrationStyle}
          />
        </CardContent>
      </Card>

      <Row spacing={32} justify="center" align="center" style={{ width: "100%" }} legacy>
        <Column spacing={24} style={{ padding: 20, backgroundColor: "#ff9d9d", flex: 1 }} align="center">
          <Card>
            <CardHeader>
              <Row spacing={10} align="center">
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "green" }} />
                <CardTitle>Välkommen!</CardTitle>
              </Row>
              <CardDescription>Fyll i formuläret nedan för att skapa ditt konto.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardContent style={{ paddingTop: 20 }}>
              <AccountRegistration
                styling={{ submitButtonStyling: { variant: "outline" } }}
                onSubmit={(data) => console.log("Registreringsdata:", data)}
                fields={[
                  { id: "username3", label: "Användarnamn", type: "text", required: true },
                  { id: "email3", label: "E-post", type: "text", required: true },
                  { id: "password3", label: "Lösenord", type: "password", required: true },
                ]}
                passwordRules={[{ id: "len", label: "Minst 8 tecken", test: (p) => p.length >= 8 }]}
              />
            </CardContent>
          </Card>
        </Column>
      </Row>

      <Row spacing={32} justify="center" style={{ width: "100%" }} legacy>
        <Column legacy={true} spacing={10} style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Systemstatus (Legacy Render):</Text>
          <Row legacy={true} spacing={15}>
            <Text>Server: OK</Text>
            <Text>Databas: OK</Text>
          </Row>
        </Column>
        <Column>
          <Card>
            <CardHeader>
              <CardTitle>Example Card</CardTitle>
              <CardDescription>Example card and card description that shows the different buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <View style={{ gap: 12 }}>
                <Button variant="default">
                  <ButtonText>Test</ButtonText>
                </Button>
                <Button variant="outline">
                  <ButtonText>Test</ButtonText>
                </Button>
                <Button variant="link">
                  <ButtonText>Test</ButtonText>
                </Button>
              </View>
            </CardContent>
          </Card>
        </Column>
      </Row>
    </ScrollView>
  );
}
