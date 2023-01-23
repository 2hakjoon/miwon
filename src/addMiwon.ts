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
    key: string,
    fetcher: () => any,
    normalizer: (res: any) => any
  ) => {
    try {
      setFetchState({
        [key]: { data: undefined, loading: true, error: undefined }
      })
      const res = await fetcher()
      const normalized = normalizer(res)
      setFetchState({
        [key]: { data: normalized.result, loading: false, error: undefined }
      })
      setState(normalized.entities)

      return normalized.result
    } catch (e) {
      setFetchState({
        [key]: { data: undefined, loading: false, error: e }
      })
      throw e
    }
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
