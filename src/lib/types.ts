import { ElementType } from "react";
import { BhdContentBlockWithBlueprint } from "./models/contentBlock";

export type BhdBlockComponentProps = {
  contentBlock: BhdContentBlockWithBlueprint;
};

export type BhdBlueprintLut = Record<
  string,
  ElementType<BhdBlockComponentProps>
>;
