import { BhdContextType, useBhdInternalContext } from "./context";

export const useBhdContext = (): BhdContextType => {
  const internalContext = useBhdInternalContext();

  return {
    accessToken: internalContext.accessToken,
  };
};
