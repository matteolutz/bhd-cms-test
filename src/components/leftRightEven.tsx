import { FC } from "react";
import { BhdContentBlockComponentProps, BhdComponent } from "bhd-cms-react";

const LeftRightEvenComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <div
      {...bhdRoot<"div">({
        style: {
          display: "grid",
          width: "100%",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
        },
      })}
    >
      <BhdComponent
        {...bhdField<typeof BhdComponent>("left", {
          contentBlockId: contentBlock.content.left as string,
        })}
      />
      <BhdComponent
        {...bhdField<typeof BhdComponent>("right", {
          contentBlockId: contentBlock.content.right as string,
        })}
      />
    </div>
  );
};

export default LeftRightEvenComponent;
