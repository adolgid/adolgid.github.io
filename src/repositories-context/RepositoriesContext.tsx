/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type PropsWithChildren } from "react";
import { getMockRepositories } from "./getMockRepositories";
import { getApiRepositories } from "./getApiRepositories";
import { APP_ENVIRONMENT, Environment } from "../config/env";

const mockRepositories = getMockRepositories();
const RepositoriesContext = createContext(mockRepositories);

export function RepositoriesContextProvider({
  children,
}: Readonly<PropsWithChildren>) {
  let repositories = mockRepositories;
  switch (APP_ENVIRONMENT) {
    case Environment.mock:
      repositories = mockRepositories;
      break;
    case Environment.development:
    case Environment.pre:
    case Environment.production:
      repositories = {
        ...mockRepositories,
        ...getApiRepositories(),
      };
      break;
  }
  return (
    <RepositoriesContext.Provider value={repositories}>
      {children}
    </RepositoriesContext.Provider>
  );
}

export function useRepositoriesContext() {
  return useContext(RepositoriesContext);
}
