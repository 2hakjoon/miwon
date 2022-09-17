function createStore<T>(initState: T) {
  let state: T = initState

  const getState = (): T => {
    return state
  }

  const dispatch = (payload?: { [k: string]: any }) => {
    state = { ...state, ...payload }
  }

  return { getState, dispatch }
}

export default createStore
