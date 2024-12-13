import { forwardRef } from "react";
import { BhdContentBlockWithBlueprint } from "../models/contentBlock";
import { useBhdInternalContext } from "../utils/context";

type BhdContentBlockComponentProps = {
  contentBlock: BhdContentBlockWithBlueprint;
};

const BhdContentBlockComponent = forwardRef<
  HTMLElement,
  BhdContentBlockComponentProps
>(({ contentBlock, ...rest }, ref) => {
  const context = useBhdInternalContext();

  const Component = context.getBlueprintComponent(
    contentBlock.contentBlockBlueprintId,
  );

  if (Component) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return <Component ref={ref} contentBlock={contentBlock} {...rest} />;
  }

  return (
    <p>
      No component was registered for the blueprint id{" "}
      <strong>{contentBlock.contentBlockBlueprintId}</strong>.
    </p>
  );
});

export default BhdContentBlockComponent;
