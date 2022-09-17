import createFetcher from './fetcher/createFetcher'
import createStore from './store/createStore'
import { AddMiwon } from './types/addMiwon'

const addMiwon = ({ initVal, config }: AddMiwon) => {
  const store = createStore(initVal)
  const fetcher = createFetcher(config)

  const miwonQuery = async (url: string, normalizer: (res: any) => any) => {
    const res = await fetcher.get(url)
    return store.setState(normalizer(res))
  }

  const miwonMutation = (url: string, body: { [k: string]: any }) => {
    fetcher.post(url, body)
  }

  return { ...store, miwonQuery, miwonMutation }
}

export default addMiwon
