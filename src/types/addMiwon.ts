import { Store } from './createStore'
import { Subscription } from './subscription'

export interface AddMiwonConfigs {}

export interface AddMiwonArgs {
  config?: AddMiwonConfigs
  initVal?: { [k: string]: any }
  minFetchInterval?: number
}

export interface AddMiwonReturns extends Subscription, Store {
  miwonQuery: (key: string, fetcher: () => any, func: (res: any) => any) => any
  miwonMutation: (fetcher: () => any, body: any) => any
  getConfig: () => any
}
