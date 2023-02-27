import React, { useState, useEffect } from 'react'
import './nav.scss'

// Router
import { NavLink } from 'react-router-dom'

// Data Base
import { db } from '@/database/firebase.config'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'

const Nav = () => {
  const categoryCollection = getDocs(query(collection(db, 'category'), orderBy("position", "asc")))
  const [category, setCategory] = useState([])
  const [showCategory, setShowCategory] = useState(false)

  useEffect(() => {
    categoryCollection.then(result => {
      setCategory(result.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      }))
      setShowCategory(true)
    })
      .catch(error => console.log(error))
  }, [])

  return (
    <nav className="nav">
      <ul className="nav__list">
        {showCategory
          ? <>
            <li className="nav__item">
              <NavLink to="/" className="nav__link--black">Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/all" className="nav__link--black">all</NavLink>
            </li>
            {
              category.map((item) =>
                <li key={item.id} className="nav__item">
                  <NavLink to={`/products/${item.name}`} className="nav__link--black">{item.name}</NavLink>
                </li>
              )
            }
          </>
          : null
        }
      </ul>
    </nav>

  )
}

export default Nav