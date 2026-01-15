import { StyleSheet, Text, View } from "react-native";
import { PasswordStrengthProps, RuleComponentType } from "./types";

// Component to display password strength based on defined rules
export function PasswordStrengthMeter({
  password,
  rules,
  style,
  icons,
}: PasswordStrengthProps) {
  return (
    <View style={[styles.container, style?.container]}>
      <Text style={[styles.title, style?.title]}>Password must</Text>
      {rules.map((rule) => (
        <RuleComponent
          key={rule.id}
          rule={rule}
          password={password}
          style={style?.ruleStyling}
          icons={icons}
        />
      ))}
    </View>
  );
}

// Component to display individual password rule status
// With optional custom icons and styling for passed and failed rules
function RuleComponent({
  rule,
  password,
  passString = "✓",
  failString = "✗",
  style,
  icons,
}: RuleComponentType) {
  const passed = rule.test(password);
  return (
    <View style={[styles.ruleRow, style?.ruleRow]}>
      {/* Display custom icons if provided, otherwise use default text indicators */}
      {icons ? (
        <View>{passed ? icons.passed : icons.failed}</View>
      ) : (
        <Text
          style={[
            styles.icon,
            passed
              ? [styles.ok, style?.textPassed]
              : [styles.fail, style?.textFailed],
          ]}>
          {passed ? passString : failString}
        </Text>
      )}
     {/* Display rule styling if provided */}
      <Text
        style={
          passed
            ? [styles.ok, style?.textPassed]
            : [styles.fail, style?.textFailed]
        }>
        {rule.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 12,
    borderRadius: 6,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  ruleRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  icon: {
    width: 20,
    fontWeight: "bold",
  },
  ok: {
    color: "green",
  },
  fail: {
    color: "darkred",
  },
});
