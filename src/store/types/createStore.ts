

export interface Store {
  getState: () => any
  dispatch: (payload?: { [k: string]: any }) => void
}