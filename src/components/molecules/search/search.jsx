import React from 'react'
import './search.scss'

//Algolia
import { searchItems } from '@/database/algolia.js'

const Search = ({ sendData }) => {

  const handleChange = async (e) => {
    const { value } = e.target
    if (value === '') {
      sendData([], true)
    }
    else {
      const [results] = await searchItems(value)
      if (results.length == 0) { sendData(results, false) } else { sendData(results, true) }
    }

  }

  return (
    <form>
      <input type="search" name="focus" placeholder="Search" id="search-input" onChange={handleChange} />
    </form>
  )
}

export default Search