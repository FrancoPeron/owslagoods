import algoliasearch from "algoliasearch";

// Connect and authenticate with your Algolia app
const client = algoliasearch(import.meta.env.VITE_ALGOLIA_APLICATION_ID, import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY)
const index = client.initIndex(import.meta.env.VITE_ALGOLIA_INDEX)


export const searchItems = async (value) => {
  const { hits } = await index.search(value, {
    hitsPerPage: 1000
  })
  console.log(hits)
  const results = hits.map(hit => {
    const { objectID: id } = hit
    return { id }
  })
  return [results]
}