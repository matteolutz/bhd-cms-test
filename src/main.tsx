import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BhdContext from "./lib/components/context.tsx";

const options = {
  accessToken: "e350e0f0-c37e-4bbd-aae4-48a5037296ad",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BhdContext options={options}>
      <App />
    </BhdContext>
  </StrictMode>,
);
