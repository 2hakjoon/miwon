function createStore<T>(initState: T) {
  let state: T = initState
  let fetchState = {}

  const getState = (): T => {
    return state
  }

  const setState = (payload: { [k: string]: any }) => {
    const willUpdateState = { ...state } as { [k: string]: any }
    const keys = Object.keys(payload)
    keys.forEach(key => {
      willUpdateState[key] = {
        ...willUpdateState[key],
        ...payload[key]
      }
    })
    state = { ...willUpdateState } as T
  }

  const getFetchState = () => {
    return fetchState
  }

  const setFetchState = (payload?: { [k: string]: any }) => {
    fetchState = { ...fetchState, ...payload }
  }

  const getAllStates = () => {
    return { state, fetchState }
  }

  return { getState, setState, getFetchState, setFetchState, getAllStates }
}

export default createStore
