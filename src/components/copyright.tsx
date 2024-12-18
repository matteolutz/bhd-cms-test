import { FC, useEffect, useState } from "react";
import { BhdBlockComponentProps } from "../lib/types";
import { useBhdContext } from "../lib";

const CopyrightComponent: FC<BhdBlockComponentProps> = ({ contentBlock }) => {
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

  return (
    copyrightInfo && (
      <span>
        &copy; {copyrightInfo.copyrightYear} {copyrightInfo.copyrightText}
      </span>
    )
  );
};

export default CopyrightComponent;
