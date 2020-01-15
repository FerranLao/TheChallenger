import React, { useState } from "react";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import createStore from "./redux/store";
import * as Font from "expo-font";
import { AppLoading } from "expo";
const store = createStore();

export default () => {
  const [dataLoader, setDataLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf")
    });
  };
  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setDataLoaded(true)}
        onError={e => console.log(e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
