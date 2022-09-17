export interface Store {
  getState: () => any
  setState: (payload?: { [k: string]: any }) => void
}
