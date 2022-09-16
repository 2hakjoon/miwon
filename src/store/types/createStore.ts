

export interface Store {
  getState: () => any
  dispatch: (type: string, payload?: { [k: string]: any }) => void
}