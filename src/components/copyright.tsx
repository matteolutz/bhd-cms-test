import { FC, useEffect, useState } from "react";
import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";

const CopyrightComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  loadingComponent,
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
    <div>
      &copy;{" "}
      <span data-bhdTitle="copyrightYear">{copyrightInfo.copyrightYear}</span>{" "}
      <span data-bhdTitle="copyrightText">{copyrightInfo.copyrightText}</span>
    </div>
  ) : (
    <LoadingComponent />
  );
};

export default CopyrightComponent;
