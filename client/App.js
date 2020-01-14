import React from "react";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import createStore from "./redux/store";
const store = createStore();

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
