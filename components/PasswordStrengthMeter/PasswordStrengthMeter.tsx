import { View, Text, StyleSheet } from "react-native";
import { PasswordStrengthMeterProps } from "./types";

export function PasswordStrengthMeter({
  password,
  rules,
}: PasswordStrengthMeterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password must</Text>

      {rules.map((rule) => {
        const passed = rule.test(password);

        return (
          <View key={rule.id} style={styles.ruleRow}>
            <Text style={[styles.icon, passed ? styles.ok : styles.fail]}>
              {passed ? "✓" : "✗"}
            </Text>
            <Text style={passed ? styles.ok : styles.fail}>
              {rule.label}
            </Text>
          </View>
        );
      })}
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
  }
});
