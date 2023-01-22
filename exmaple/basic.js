const { default: axios } = require('axios')
const { schema, normalize } = require('normalizr')
const { addMiwon } = require('../dist')

const miwonStore = addMiwon({
  initVal: {},
  config: {
    baseURL: 'https://my-json-server.typicode.com'
  }
})

const postsNormalizer = res => {
  const commentEntity = new schema.Entity('comments')

  const postEntity = new schema.Entity('posts', {
    comments: [commentEntity]
  })

  const posts = new schema.Array(postEntity)
  return normalize(res, posts)
}

const caller = async () =>
  axios
    .get('https://my-json-server.typicode.com/2hakjoon/miwon/posts')
    .then(res => {
      console.log(res.data)
      return res.data
    })
    .catch(err => console.log(err))

miwonStore.miwonQuery(caller, postsNormalizer).then(() => {
  // console.log(miwonStore.getState())
  miwonStore.getAllStates()
  console.log('miwonStore.getAllStates(): ', miwonStore.getAllStates())
})

const articlesNormalizer = res => {
  const commentEntity = new schema.Entity('comments')

  const articles = new schema.Entity('articles', {
    comments: [commentEntity]
  })

  const pagedArticles = {
    nodes: [articles]
  }
  console.log(normalize(res, pagedArticles))

  return normalize(res, pagedArticles)
}

// const caller2 = async () =>
//   axios
//     .get('https://my-json-server.typicode.com/2hakjoon/articles')
//     .then(res => {
//       console.log(res.data)
//       return res.data
//     })
//     .catch(err => console.log(err))

// miwonStore.miwonQuery(caller2, articlesNormalizer).then(() => {
//   console.log(miwonStore.getState()['articles'][3]['comments'])
//   console.log('miwonStore.getAllStates(): ', miwonStore.getAllStates())
// })

console.log('miwonStore.getFetchState(): ', miwonStore.getFetchState())
miwonStore.setFetchState({ test: 0 })
console.log('miwonStore.getFetchState(): ', miwonStore.getFetchState())
miwonStore.getConfig()
console.log('miwonStore.getConfig(): ', miwonStore.getConfig())
miwonStore.getAllStates()
console.log('miwonStore.getAllStates(): ', miwonStore.getAllStates())
