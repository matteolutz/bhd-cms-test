import { FC } from "react";
import { BhdContentBlockComponentProps } from "bhd-cms-react";

const CopyrightComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdField,
  bhdRoot,
}) => {
  return (
    <div {...bhdRoot({})}>
      &copy;{" "}
      <span {...bhdField("coyrightYear", {})}>
        {contentBlock.content.copyrightYear}
      </span>{" "}
      <span {...bhdField("copyrightText", {})}>
        {contentBlock.content.copyrightText}
      </span>
    </div>
  );
};

export default CopyrightComponent;
