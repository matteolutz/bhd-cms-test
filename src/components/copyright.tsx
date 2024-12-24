import { FC, useEffect, useState } from "react";
import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";

const CopyrightComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  loadingComponent,
  bhdField,
  bhdRoot,
}) => {
  const { getContentBlock } = useBhdContext();

  const [copyrightInfo, setCopyrightInfo] = useState<{
    copyrightText: string;
    copyrightYear: number;
  } | null>(null);

  useEffect(() => {
    getContentBlock(contentBlock.content.test).then((copyrightInfoBlock) =>
      setCopyrightInfo(copyrightInfoBlock.content),
    );
  }, []);

  const LoadingComponent = loadingComponent;

  return copyrightInfo ? (
    <div {...bhdRoot()}>
      &copy;{" "}
      <span {...bhdField("coyrightYear")}>{copyrightInfo.copyrightYear}</span>{" "}
      <span {...bhdField("copyrightText")}>{copyrightInfo.copyrightText}</span>
    </div>
  ) : (
    <LoadingComponent />
  );
};

export default CopyrightComponent;
