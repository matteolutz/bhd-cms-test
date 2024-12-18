import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BhdContext from "./lib/components/context.tsx";
import BasicPageComponent from "./components/basicPage.tsx";
import DummyUIComponent from "./components/dummyUiComponent.tsx";
import CopyrightComponent from "./components/copyright.tsx";

const options = {
  accessToken: "e350e0f0-c37e-4bbd-aae4-48a5037296ad",
  blueprintLut: {
    cm4k30g6q00038v0u7wxdg0ss: BasicPageComponent,
    cm4mnpg7h000710utjlxc7eec: DummyUIComponent,
    cm4mjsgwo00099zed2uqgrike: CopyrightComponent,
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BhdContext options={options}>
      <App />
    </BhdContext>
  </StrictMode>,
);
