import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";

export function Filter({
  title,
  active,
  ...rest
}: FilterProps & PressableProps) {
  return (
    <Pressable
      style={[styles.pressable, active && styles.pressableActive]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
