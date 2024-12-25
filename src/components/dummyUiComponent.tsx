import { FC } from "react";
import { BhdContentBlockComponentProps } from "bhd-cms-react";

const DummyUIComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <div {...bhdRoot({})}>
      <h1 {...bhdField("title", {})}>{contentBlock.content.title}</h1>
      <p {...bhdField("description", {})}>{contentBlock.content.description}</p>
    </div>
  );
};

export default DummyUIComponent;
