import axios from 'axios'

interface FetcherRequestConfig {
  headers?: Record<string, string | number | boolean>
  baseURL?: string
}

export const createFetcher = (config: FetcherRequestConfig) => {
  const fetch = axios.create(config)

  return {
    get: <T>(url: string): Promise<T> => fetch.get(url).then(res => res.data),

    post: <T>(url: string, body: object): Promise<T> =>
      fetch.post(url, body).then(res => res.data),

    delete: <T>(url: string): Promise<T> =>
      fetch.delete(url).then(res => res.data),

    put: <T>(url: string, body: object): Promise<T> =>
      fetch.put(url, body).then(res => res.data)
  }
}
