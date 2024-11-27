import IRepositoriesContext from "./IRepositoriesContext";

export function getApiRepositories(): Partial<IRepositoriesContext> {
  return {
    defaultContext: null,
  };
}
