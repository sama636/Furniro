import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/main.css";
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root"));

root.render(
// createRoot(document.getElementById("root")).render(

  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);