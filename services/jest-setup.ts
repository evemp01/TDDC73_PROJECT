jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  return Reanimated;
});

// Tysta ner kända varningar
global.console.warn = (message: string) => {
  if (message.includes("Clickable element has no accessibility label")) return;
};
