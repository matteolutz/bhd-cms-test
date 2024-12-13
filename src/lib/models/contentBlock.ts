import { BhdContentBlockBlueprint } from "./contentBlockBlueprint";

export type BhdContentBlock = {
  id: string;
  name: string;
  content: Record<string, unknown>;

  createdAt: string;
  updatedAt: string;

  contentBlockBlueprintId: string;
};

export type BhdContentBlockWithBlueprint = BhdContentBlock &
  Pick<BhdContentBlockBlueprint, "projectId" | "tag">;
