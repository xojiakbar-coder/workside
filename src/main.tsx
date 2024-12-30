import "./index.css";
import Root from "./root/root";
import { StrictMode } from "react";
import RootProvider from "./context";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RootProvider>
        <Root />
      </RootProvider>
    </BrowserRouter>
  </StrictMode>
);
