const { createFetcher } = require("./dist/fetcher/fetcher")
const { normalizer } = require("./dist/normailzer/normalizer")
const { default: createStore } = require("./dist/store/createStore")


const store = createStore({ test: 'state' })

console.log(store.getState())

const fetcher = createFetcher({
  baseURL: 'https://my-json-server.typicode.com'
})



const fetchHander = async () => {
  const res = await fetcher.get('/2hakjoon/miwon/posts')
  normalizer(store, res, 'post')
}

fetchHander()
