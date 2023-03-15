export interface Store {
  getState: () => any
  setState: (payload: { [k: string]: any }) => void
  getFetchState: () => any
  setFetchState: (payload: { [k: string]: any }) => void
  getAllStates: () => any
}
