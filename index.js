const { normalize, schema } = require('normalizr')
const { createFetcher } = require('./dist/fetcher/fetcher')
const { default: createStore } = require('./dist/store/createStore')

const store = createStore()

const fetcher = createFetcher({
  baseURL: 'https://my-json-server.typicode.com'
})

const postsNormalizer = res => {
  const commentEntity = new schema.Entity('comments')

  const postEntity = new schema.Entity('posts', {
    comments: [commentEntity]
  })

  const posts = new schema.Array(postEntity)

  return normalize(res, posts).entities
}

const fetchHander = async () => {
  const res = await fetcher.get('/2hakjoon/miwon/posts')

  store.setState(postsNormalizer(res))
  console.log(store.getState())
}

fetchHander()
