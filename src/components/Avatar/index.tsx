import { Image, ImageProps } from "react-native";
import { styles } from "./styles";

export function Avatar({ focused, ...rest }: AvatarProps & ImageProps) {
  return <Image style={[styles.image, focused && styles.focused]} {...rest} />;
}
