import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 6,
  },
  text: {
    color: theme.colors.white,
    fontSize: 18,
    fontFamily: theme.fontFamily.medium,
  },
  pressableActive: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  },
});
