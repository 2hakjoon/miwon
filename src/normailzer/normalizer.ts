import { Store } from '../store/types/createStore'
import { normalize, schema } from 'normalizr'

export const normalizer = (store: Store, res: any, nodes: string) => {
  const commentEntity = new schema.Entity('comments')

  const postEntity = new schema.Entity('posts', {
    comments: [commentEntity]
  })

  const posts = new schema.Array(postEntity)

  const normalizedResponse = normalize(res, posts)

  store.dispatch(normalizedResponse.entities)

}
