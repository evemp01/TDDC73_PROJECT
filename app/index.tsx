import { AccountRegistration, Button, ButtonText, Card, CardContent, CardDescription, CardHeader, CardTitle, Column, PasswordRule, RegistrationField, Row } from "@/ui-sdk/src";
import { ScrollView, Text, View } from "react-native";

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
const fields: RegistrationField[] = [
  {
    id: "username1",
    label: "Username",
    placeholder: "Choose a username",
    type: "text",
    required: true,
    maxLength: 8,
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
          <AccountRegistration fields={fields} passwordRules={rules} onSubmit={(values) => console.log(values)} />
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
                onSubmit={(data) => console.log("Registreringsdata:", data)}
                fields={[
                  { id: "username", label: "Användarnamn", type: "text", required: true },
                  { id: "email", label: "E-post", type: "text", required: true },
                  { id: "password", label: "Lösenord", type: "password", required: true },
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
