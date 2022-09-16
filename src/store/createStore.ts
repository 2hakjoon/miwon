import { Reducer } from './types/createSTore'

function createHeduxStore<T>(initState: T, { reducer }: Reducer<T>) {
  let state: T = initState

  const getState = (): T => {
    return state
  }

  const dispatch = (payload?: { [k: string]: any }) => {
    state = reducer(state, { payload })
  }

  return { getState, dispatch }
}

export default createHeduxStore
