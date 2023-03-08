import React, { useEffect, useRef } from 'react'
import './search.scss'

//Algolia
import { searchItems } from '@/database/algolia.js'

// Components
import SearchWidget from '@/components/atoms/searchWitget/searchWitget.jsx'

const Search = ({ sendData, pointer }) => {

  const inputRef = useRef(null);

  useEffect(() => {
    if(pointer) {
      // console.log("das")
      inputRef.current.focus();
    }
    const button = document.querySelector('.header__nav button');
  
    button.addEventListener('click', function() {
      inputRef.current.focus();
    });
    
  }, [pointer]);
  
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
    <div className='search-form'>
      <div className='search-form__item'>
        <SearchWidget />
        <input className='search-form__input' ref={inputRef} type="search" name="focus" placeholder="Search by product, artists and price" id="search-input" onChange={handleChange} />
      </div>
    </div>
  )
}

export default Search