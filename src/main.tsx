import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BhdContext, BhdContextOptions } from "bhd-cms-react";
import BasicPageComponent from "./components/basicPage.tsx";
import DummyUIComponent from "./components/dummyUiComponent.tsx";
import CopyrightComponent from "./components/copyright.tsx";
import LeftRightEvenComponent from "./components/leftRightEven.tsx";

const options: BhdContextOptions = {
  accessToken: "e350e0f0-c37e-4bbd-aae4-48a5037296ad",
  baseUrl: "http://localhost:3000",
  blueprintLut: {
    cm4k30g6q00038v0u7wxdg0ss: BasicPageComponent,
    cm4mnpg7h000710utjlxc7eec: DummyUIComponent,
    cm4mjsgwo00099zed2uqgrike: CopyrightComponent,
    cm4vnqn900007y8uefnp9ctru: LeftRightEvenComponent,
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BhdContext options={options}>
      <App />
    </BhdContext>
  </StrictMode>,
);
