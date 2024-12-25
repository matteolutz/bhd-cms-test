import { BhdComponent, BhdContentBlockComponentProps } from "bhd-cms-react";
import { FC } from "react";

const BasicPageComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <div
      {...bhdRoot<"div">({
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        },
      })}
    >
      {contentBlock.content.children.map((child: string) => (
        <BhdComponent
          {...bhdField<typeof BhdComponent>("children", {
            contentBlockId: child,
          })}
          key={child}
        />
      ))}
    </div>
  );
};

export default BasicPageComponent;
