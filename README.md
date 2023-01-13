# Miwon

Miwon is oriented to intergrated state container with api fetching and cache normalizing.

# Concept

- Cache Normalizing like [Apollo Client](https://www.apollographql.com/docs/react)
- Handling sever-side-data like [TanStack Query](https://tanstack.com/query/v4/docs/overview)

# Notice

- Miwon is a kind of seasoning for cook.
- This library is experimental and unstable. (also, document is unkind)

# Installation

```bash
npm install miwon

yarn add miwon
```

# Quick Start

## 1. Add Miwon to your project

```javascript
import { addMiwon } from 'miwon'

const miwon = addMiwon({
  config: {
    baseURL: 'https://my-json-server.typicode.com' //change base url for your project
  }
})
```

## 2. Build Normalizer.

```javascript
import { schema, normalize } from 'miwon'

const postsNormalizer = (res: any) => {
  const commentEntity = new schema.Entity('comments')

  const postEntity = new schema.Entity('posts', {
    comments: [commentEntity]
  })

  const posts = new schema.Array(postEntity)
  return normalize(res, posts).entities
}
```

## 3. Get data with Normalizer.

```javascript
miwon.miwonQuery('/2hakjoon/miwon/posts', postsNormalizer).then(
  () => console.log(getState()) // you can see normalized result which cached
)
```

## Todo

- [x] store
  - [x] createStore
- [x] subscription
  - [x] subscribe
  - [x] unsubscribe
  - [x] clear
  - [x] getSubscriptions
- [x] fetcher
  - [x] createFetcher
  - [x] errorHandling
- [x] cahce
  - [x] cache with normalized data
  - [x] get cache with key
- [x] normalizer
