import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./app/redux/store";

const store = configureStore();
export default ReactApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
