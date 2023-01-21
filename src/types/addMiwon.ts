import { FetcherRequestConfig } from './createFetcher'
import { Store } from './createStore'
import { Subscription } from './subscription'

export interface AddMiwonConfigs extends FetcherRequestConfig {}

export interface AddMiwonArgs {
  config?: AddMiwonConfigs
  initVal?: { [k: string]: any }
}

export interface AddMiwonReturns extends Subscription, Store {
  miwonQuery: (url: string, func: (res: any) => any) => any
  miwonMutation: (url: string, body: any) => any
}
