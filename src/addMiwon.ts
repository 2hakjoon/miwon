import createFetcher from './fetcher/createFetcher'
import createStore from './store/createStore'
import subscription from './subscription/subscription'
import { AddMiwon } from './types/addMiwon'

export const addMiwon = ({ initVal, config }: AddMiwon) => {
  const { reflect, subscribe, clear, getSubscriptions } = subscription()

  const { setState, getState } = createStore(initVal)

  const fetcher = createFetcher(config)

  const miwonQuery = async (
    url: string,
    key: string,
    normalizer: (res: any) => any
  ) => {
    const res = await fetcher.get(url)
    const normalized = normalizer(res)
    setState(normalized.entities)
    return { [key]: normalized.result }
  }

  const miwonMutation = (url: string, body: { [k: string]: any }) => {
    fetcher.post(url, body)
  }

  return {
    getState,
    miwonQuery,
    miwonMutation,
    clear,
    subscribe,
    getSubscriptions
  }
}
