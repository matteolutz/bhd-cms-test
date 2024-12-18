import { FC } from "react";
import { BhdBlockComponentProps } from "../lib/types";

const DummyUIComponent: FC<BhdBlockComponentProps> = ({ contentBlock }) => {
  return (
    <div>
      <h1>{contentBlock.content.title}</h1>
      <p>{contentBlock.content.description}</p>
    </div>
  );
};

export default DummyUIComponent;
