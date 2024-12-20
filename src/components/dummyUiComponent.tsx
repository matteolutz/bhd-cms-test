import { FC } from "react";
import { BhdContentBlockComponentProps } from "../lib/index";

const DummyUIComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
}) => {
  return (
    <div>
      <h1>{contentBlock.content.title}</h1>
      <p>{contentBlock.content.description}</p>
    </div>
  );
};

export default DummyUIComponent;
