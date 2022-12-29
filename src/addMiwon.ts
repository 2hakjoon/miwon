import createFetcher from './fetcher/createFetcher'
import createStore from './store/createStore'
import subscription from './subscription/subscription'
import { AddMiwonArgs, AddMiwonReturns } from './types/addMiwon'

export const addMiwon = ({
  initVal,
  config
}: AddMiwonArgs): AddMiwonReturns => {
  const { reflect, subscribe, clearSubscriptions, getSubscriptions } =
    subscription()

  const { setState, getState } = createStore(initVal)

  const fetcher = createFetcher(config)

  const miwonQuery = async (url: string, normalizer: (res: any) => any) => {
    const res = await fetcher.get(url)
    const normalized = normalizer(res)
    setState(normalized.entities)
    return normalized.result
  }

  const miwonMutation = (url: string, body: { [k: string]: any }) => {
    const res = fetcher.post(url, body)
    return res
  }

  return {
    getState,
    setState,
    miwonQuery,
    miwonMutation,
    reflect,
    clearSubscriptions,
    subscribe,
    getSubscriptions
  }
}
