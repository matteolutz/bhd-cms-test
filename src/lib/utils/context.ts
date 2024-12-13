import { AxiosInstance } from "axios";
import { createContext, useContext } from "react";
import { BhdContentBlockWithBlueprint } from "../models/contentBlock";
import { BhdBlueprintLut } from "../types";

export type BhdContextType = {
  accessToken: string;
  blueprintLut: BhdBlueprintLut;
};

export type BhdInternalContextType = BhdContextType & {
  axiosInstance: AxiosInstance;

  getBlueprintComponent: (id: string) => BhdBlueprintLut[keyof BhdBlueprintLut];

  getContentBlock: (id: string) => Promise<BhdContentBlockWithBlueprint>;
};

export const BhdInternalContext = createContext<BhdInternalContextType>(
  {} as BhdInternalContextType,
);

export const useBhdInternalContext = () => useContext(BhdInternalContext);
