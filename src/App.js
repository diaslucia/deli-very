import React from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";

import styles from "./styles";

import AppNavigation from "./navigation/index";

const App = () => {

  const [loaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo-Regular.ttf"),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppNavigation/>
    </View>
  );
}

export default App;
