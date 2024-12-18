import BhdComponent from "../lib/components/bhd";
import { BhdBlockComponentProps } from "../lib/types";
import { FC } from "react";

const BasicPageComponent: FC<BhdBlockComponentProps> = ({ contentBlock }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      {contentBlock.content.children.map((child: string) => (
        <BhdComponent key={child} contentBlockId={child} />
      ))}
    </div>
  );
};

export default BasicPageComponent;
