import React, {useState, useEffect } from 'react'
import '../style/views/homeContainer.css'

// Router
import { Link, useParams } from "react-router-dom";

// Data Base
import {db} from '../firebase/firebase.config'
import {getDocs, collection, query, where} from 'firebase/firestore'

// Components
import ItemList from "../components/itemList/itemList.jsx";


const HomeContainer = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{

        const productsCollection = collection(db,'products');
        getDocs(productsCollection)
        .then(result => {
            const products = result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(products)
        })
        .catch(error => console.log(error))
    },[])


    return(

        <main className='main'>

            <section className="banner">
                <div className='banner__box1'>
                    <h1 className='banner__title'>Lukevicious x OWSLA</h1>
                    <p className='banner__subtitle'>Collection</p>
                </div>
                <Link className='btn' to="/">Now Available</Link>
                <div className='banner__imgs'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                
            </section>

            <section className='items-list'>
                <p className='items-list__title'>More Popular</p>
                <div className='items-list__container'>
                    <ItemList items={products}/>
                </div>
            </section>

            <span className="background__2"></span>

            <section className='artists-apparel'>

                <span className='box-title'><p>Artists' Apparel</p></span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <Link to="/">View All</Link>

            </section>

            <section className='items-list'>
                <p className='items-list__title'>Headwears</p>
                <div className='items-list__container'>
                    <ItemList items={products}/>
                </div>
            </section>

            <section className='collection'>
                <div className='collection-box1'>
                    <span className='box-title-sm'><p>Burn Forever</p></span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

                <div className='collection-box2'>
                    <span className='box-title-sm'><p>Audio Destruct</p></span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

                <Link to="/">View All</Link>

            </section>

            <section className='items-list'>
                <p className='items-list__title'>Accessories</p>
                <div className='items-list__container'>
                    <ItemList items={products}/>
                </div>
            </section>
        </main>    
    
    )
}

export default HomeContainer