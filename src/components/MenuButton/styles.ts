import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  icon: {
    padding: 24,
    borderRadius: 22,
    backgroundColor: theme.colors.gray[700],
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize: 18,
    marginTop: 10,
  },
});
