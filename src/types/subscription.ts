export interface Listener {
  callback: () => void
  prev: Listener | null
  next: Listener | null
}

export interface Subscription {
  reflect: () => void
  subscribe: (arg: () => void) => () => void
  clear: () => void
  getSubscriptions: () => Listener[]
}
