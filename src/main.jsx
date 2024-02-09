import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import "./index.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/viva-light/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Provider>
);
