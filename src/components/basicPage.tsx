import { BhdComponent, BhdContentBlockComponentProps } from "bhd-cms-react";
import { FC } from "react";

const BasicPageComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
      {...bhdRoot()}
    >
      {contentBlock.content.children.map((child: string) => (
        <BhdComponent
          {...bhdField("children")}
          key={child}
          contentBlockId={child}
        />
      ))}
    </div>
  );
};

export default BasicPageComponent;
