import createStore from './store/createStore'
import subscription from './subscription/subscription'
import { AddMiwonArgs, AddMiwonReturns } from './types/addMiwon'

export const addMiwon = ({
  initVal,
  config
}: AddMiwonArgs): AddMiwonReturns => {
  const { reflect, subscribe, clearSubscriptions, getSubscriptions } =
    subscription()

  const { setState, getState, getFetchState, setFetchState, getAllStates } =
    createStore(initVal)

  const getConfig = () => config

  const miwonQuery = async (
    fetcher: () => any,
    normalizer: (res: any) => any
  ) => {
    const res = await fetcher()
    const normalized = normalizer(res)
    setFetchState(normalized.result)
    setState(normalized.entities)
    return normalized.result
  }

  const miwonMutation = async (fetcher: () => any) => {
    const res = await fetcher()
    return res
  }

  return {
    getState,
    setState,
    miwonQuery,
    miwonMutation,
    getConfig,
    reflect,
    clearSubscriptions,
    subscribe,
    getSubscriptions,
    getFetchState,
    setFetchState,
    getAllStates
  }
}
