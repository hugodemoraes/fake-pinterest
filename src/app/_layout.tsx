import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_700Bold,
} from "@expo-google-fonts/dosis";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_700Bold,
  });

  if (fontsLoaded) SplashScreen.hideAsync();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  );
}
