import { FC } from "react";
import { BhdContentBlockComponentProps, BhdComponent } from "../lib/index";

const LeftRightEvenComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
}) => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <BhdComponent contentBlockId={contentBlock.content.left as string} />
      <BhdComponent contentBlockId={contentBlock.content.right as string} />
    </div>
  );
};

export default LeftRightEvenComponent;
