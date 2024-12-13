import { ElementType } from "react";
import { BhdContentBlockWithBlueprint } from "./models/contentBlock";

export type BhdBlueprintLut = Record<
  string,
  ElementType<{ contentBlock: BhdContentBlockWithBlueprint }>
>;
