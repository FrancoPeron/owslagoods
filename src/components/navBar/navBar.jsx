
import React, {useState, useEffect } from 'react'
import '../../style/components/navBar.css'

// Router
import {Link, NavLink }  from 'react-router-dom'

// Data Base
import {db} from '../../firebase/firebase.config'
import {getDocs, collection, query, orderBy, where} from 'firebase/firestore'

// Components
import CartWidget from './cartWitget.jsx'

const NavBar = ()=>{

    const categoryCollection = getDocs(query(collection(db,'category'), orderBy("position", "asc")))
    const [category, setCategory] = useState([])

    useEffect(()=>{

        categoryCollection.then(result => {
            setCategory(result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            }))
        })
        .catch(error => console.log(error))

        
        
    },[])
    
    return(
        <header className="header">

            <div className="header__logo">
                <p className="header__logo-text">OWSLA</p>
                <Link to="/"><img className="header__logo-img" alt="OWSLA Logo" /></Link>
                <p className="header__logo-text">GOODS</p>
            </div>
            <div className="header__nav">

                <input type="checkbox" name="burger-btn" id="burger" />
                <label htmlFor="burger" className="burger-btn">
                    <div className="burger"></div>
                </label>
                
                <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.638 18.8702L19.7541 17.9864L17.9864 19.7541L18.8702 20.638L20.638 18.8702ZM25.3661 27.1339C25.8543 27.622 26.6457 27.622 27.1339 27.1339C27.622 26.6457 27.622 25.8543 27.1339 25.3661L25.3661 27.1339ZM21.25 13.125C21.25 17.6123 17.6123 21.25 13.125 21.25V23.75C18.993 23.75 23.75 18.993 23.75 13.125H21.25ZM13.125 21.25C8.63769 21.25 5 17.6123 5 13.125H2.5C2.5 18.993 7.25697 23.75 13.125 23.75V21.25ZM5 13.125C5 8.63769 8.63769 5 13.125 5V2.5C7.25697 2.5 2.5 7.25697 2.5 13.125H5ZM13.125 5C17.6123 5 21.25 8.63769 21.25 13.125H23.75C23.75 7.25697 18.993 2.5 13.125 2.5V5ZM18.8702 20.638L25.3661 27.1339L27.1339 25.3661L20.638 18.8702L18.8702 20.638Z" fill="black"/>
                </svg>

                <nav className="nav">

                    <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink to="/all" className="nav__link--black" href="">all</NavLink>
                            </li>
                        {
                            category.map( (item) =>
                                <li key={item.id} className="nav__item">
                                    <NavLink to={`/products/${item.name}`} className="nav__link--black" href="">{item.name}</NavLink>
                                </li>
                            )

                        }

                    </ul>

                </nav>

                <Link to="/cart"><CartWidget /></Link>

            </div>

        </header>
    )
}

export default NavBar