import { FC, PropsWithChildren, useEffect, useState } from "react";
import { BhdInternalContext, BhdInternalContextType } from "../utils/context";
import axios from "axios";
import { BASE_URL } from "../utils/url";
import { BhdContentBlockWithBlueprint } from "../models/contentBlock";
import { BhdBlueprintLut } from "../types";

type BhdContextProps = {
  accessToken: string;
  blueprintLut: BhdBlueprintLut;
};

const BhdContext: FC<PropsWithChildren & { options: BhdContextProps }> = ({
  children,
  options,
}) => {
  const [context] = useState<BhdInternalContextType>({
    axiosInstance: axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    }),
    getContentBlock: (id: string): Promise<BhdContentBlockWithBlueprint> =>
      context.axiosInstance
        .get<{ block: BhdContentBlockWithBlueprint }>(`/block/${id}`)
        .then((res) => res.data.block),
    getBlueprintComponent: (
      id: string,
    ): BhdBlueprintLut[keyof BhdBlueprintLut] => context.blueprintLut[id],
    ...options,
  });

  useEffect(() => {
    context.axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${context.accessToken}`;
      return config;
    });
  }, [context]);

  return (
    <BhdInternalContext.Provider value={context}>
      {children}
    </BhdInternalContext.Provider>
  );
};

export default BhdContext;
