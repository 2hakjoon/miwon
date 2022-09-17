function createStore<T>(initState: T) {
  let state: T = initState

  const getState = (): T => {
    return state
  }

  const setState = (payload?: { [k: string]: any }) => {
    state = { ...state, ...payload }
  }

  return { getState, setState }
}

export default createStore
