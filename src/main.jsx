import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartContextProvider } from "./context/CartContextProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
