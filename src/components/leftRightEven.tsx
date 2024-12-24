import { FC } from "react";
import { BhdContentBlockComponentProps, BhdComponent } from "bhd-cms-react";

const LeftRightEvenComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
      }}
      {...bhdRoot()}
    >
      <BhdComponent
        {...bhdField("left")}
        contentBlockId={contentBlock.content.left as string}
      />
      <BhdComponent
        {...bhdField("right")}
        contentBlockId={contentBlock.content.right as string}
      />
    </div>
  );
};

export default LeftRightEvenComponent;
