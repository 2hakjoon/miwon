import { Listener, Subscription } from '../types/subscription'

function subscription(): Subscription {
  let first: Listener | null = null
  let last: Listener | null = null

  const clear = () => {
    first = null
    last = null
  }

  const getSubscriptions = () => {
    let listeners: Listener[] = []
    let listener = first
    while (listener) {
      listeners.push(listener)
      listener = listener.next
    }
    return listeners
  }

  const reflect = () => {
    let listener = first
    while (listener) {
      listener.callback()
      listener = listener.next
    }
  }

  const subscribe = (trigger: () => void) => {
    const newListener: Listener = {
      callback: trigger,
      prev: last,
      next: null
    }
    if (newListener.prev !== null) {
      newListener.prev.next = newListener
      last = newListener
    } else {
      first = newListener
      last = newListener
    }
    return function unsubscribe() {
      if (newListener.prev) {
        newListener.prev.next = newListener.next
      } else {
        first = newListener.next
      }
      if (newListener.next) {
        newListener.next.prev = newListener.prev
      } else {
        last = newListener.prev
      }
    }
  }
  return { reflect, subscribe, clear, getSubscriptions }
}

export default subscription
