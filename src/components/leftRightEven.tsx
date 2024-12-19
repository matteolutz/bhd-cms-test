import { FC } from "react";
import { BhdBlockComponentProps } from "../lib/types";
import BhdComponent from "../lib/components/bhd";

const LeftRightEvenComponent: FC<BhdBlockComponentProps> = ({
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
