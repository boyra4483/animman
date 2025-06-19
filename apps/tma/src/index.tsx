import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@animman/tma/app/App";
import "@animman/tma/app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
