import React, {useState, useEffect } from 'react'

import '../style/views/itemListContainer.css'

import getProducts from'../data.js'
import {db} from '../firebase/firebase.config'
import {getDocs, collection, query, where} from 'firebase/firestore'

import ItemList from "../components/itemList/itemList.jsx";

import { useParams } from "react-router-dom";


let promesa = getProducts()

const ItemListContainer = ()=>{

    const {categoryName} = useParams();
    const [products,setProducts] = useState([])
   

    useEffect(()=>{

        const productsCollection = collection(db,'Products');
        getDocs(categoryName ? query(productsCollection, where('category', '==', categoryName)): productsCollection)
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

        // promesa.then((data)=>{

        //     let newData = categoryName ? data.filter(data => data.category == categoryName) : data;
        //     setProducts(newData)
            
        //     console.log("!! DATA !!")
        // })
    },[categoryName])


    return(
        <section className="main-merch__list">

            <ItemList items={products}/>

        </section>
    )
}

export default ItemListContainer