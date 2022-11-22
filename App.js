import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./screens/homescreen";

import {
  useFonts as useGaramond,
  EBGaramond_500Medium,
} from "@expo-google-fonts/eb-garamond";

export default function App() {
  let [garamondLoaded] = useGaramond({ EBGaramond_500Medium });

  if (!garamondLoaded) {
    return null;
  }

  return (
    <View>
      <HomeScreen />
    </View>
  );
}
