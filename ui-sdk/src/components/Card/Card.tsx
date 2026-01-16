import { StyleSheet, Text, TextProps, View, ViewProps } from "react-native";

function Card({ style, ...props }: ViewProps) {
  return <View style={[styles.card, style]} {...props} />;
}

function CardHeader({ style, ...props }: ViewProps) {
  return <View style={[styles.header, style]} {...props} />;
}

function CardTitle({ style, ...props }: TextProps) {
  return <Text style={[styles.title, style]} {...props} />;
}

function CardDescription({ style, ...props }: TextProps) {
  return <Text style={[styles.description, style]} {...props} />;
}

function CardContent({ style, ...props }: ViewProps) {
  return <View style={[styles.content, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    marginVertical: 8,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});

export { Card, CardContent, CardDescription, CardHeader, CardTitle };
