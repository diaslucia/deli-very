import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store/index";

import styles from "./styles";

import AppNavigation from "./src/navigation/index";

const App = () => {

  const [loaded] = useFonts({
    Arimo: require("./assets/fonts/Arimo-Regular.ttf"),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store} style={styles.container}>
      <AppNavigation/>
    </Provider>
  );
}

export default App;
