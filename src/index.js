import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import MouseContextProvider from "./context/MouseContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </>
);
