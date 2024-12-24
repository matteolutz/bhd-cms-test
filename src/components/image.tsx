import { FC } from "react";
import { BhdContentBlockComponentProps, useBhdContext } from "bhd-cms-react";

const ImageComponent: FC<BhdContentBlockComponentProps> = ({
  contentBlock,
  bhdRoot,
  bhdField,
}) => {
  const { getAssetUrl } = useBhdContext();
  return (
    <img
      {...bhdRoot()}
      {...bhdField("image")}
      src={getAssetUrl(contentBlock.content.image)}
      alt={contentBlock.content.alt}
    />
  );
};

export default ImageComponent;
