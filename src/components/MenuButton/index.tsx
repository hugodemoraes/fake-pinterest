import React from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { theme } from "@/theme";

import { MenuButtonProps } from "./menuButton";
import { styles } from "./styles";

export function MenuButton({ title, icon }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={32} color={theme.colors.white} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
