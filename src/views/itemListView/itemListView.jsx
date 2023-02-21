import React, {useState, useEffect } from 'react'
import './itemListView.css'

// Router
import { useParams } from "react-router-dom";

// Data Base
import {db} from '@/database/firebase.config'
import {getDocs, collection, query, where} from 'firebase/firestore'

// Components
import ItemList from "@/components/organism/itemList/itemList.jsx";

const ItemListContainer = ()=>{
    const productsCollection = collection(db,'products');
    // const collectionsCollection = getDocs(query(collection(db,'collections')))

    const {categoryName} = useParams();

    const [filter,setFilter] = useState( productsCollection)
    const [products,setProducts] = useState([])
    const [collections,setCollections] = useState([])
    
    console.log(collections)

    useEffect(()=>{

        getDocs(categoryName ? query(filter, where('category', '==', categoryName)) : filter )
        .then(result => {
            setProducts(result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            }))
            //console.log(products)
        })
        .catch(error => console.log(error))

    },[categoryName, filter, ])

    return(
        <section className="items-list-container">
            <ItemList items={products}/>
        </section>
    )
}

export default ItemListContainer