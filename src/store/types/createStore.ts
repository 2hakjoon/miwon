interface Payload {
  [k: string]: any
}

export interface Store {
  getState: () => any
  dispatch: (type: string, payload?: { [k: string]: any }) => void
}

export interface Reducer<T> {
  reducer: (state: T, action: Payload) => T
}
