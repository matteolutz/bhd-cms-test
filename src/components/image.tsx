import { FC } from "react";
import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";

const ImageComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
}) => {
  const { getAssetUrl } = useBhdContext();
  return (
    <img
      src={getAssetUrl(contentBlock.content.image)}
      alt={contentBlock.content.alt}
    />
  );
};

export default ImageComponent;
