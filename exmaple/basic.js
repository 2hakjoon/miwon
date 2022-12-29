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
  console.log(miwonStore.getState())
})
