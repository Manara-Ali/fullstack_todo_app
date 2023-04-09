import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CustomProvider } from "./context/ModalContext";
import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <CustomProvider>
      <App />
    </CustomProvider>
  </Provider>
);
