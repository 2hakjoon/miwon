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

miwonStore.miwonQuery('/2hakjoon/miwon/posts', postsNormalizer).then(() => {
  // console.log(miwonStore.getState())
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

miwonStore
  .miwonQuery('/2hakjoon/miwon/articles', articlesNormalizer)
  .then(() => {
    console.log(miwonStore.getState()['articles'][3]['comments'])
  })
