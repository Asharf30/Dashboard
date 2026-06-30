import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./context/ContextProvider.jsx";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
);
