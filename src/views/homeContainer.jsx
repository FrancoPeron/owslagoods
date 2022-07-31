import React, {useState, useEffect } from 'react'
import '../style/views/itemListContainer.css'

// Router
import { useParams } from "react-router-dom";

// Data Base
import {db} from '../firebase/firebase.config'
import {getDocs, collection, query, where} from 'firebase/firestore'

// Components
import ItemList from "../components/itemList/itemList.jsx";


const HomeContainer = () => {

    const {categoryName} = useParams();
    const [products,setProducts] = useState([])

    useEffect(()=>{

        const productsCollection = collection(db,'products');
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
    },[categoryName])


    return(
        <>

        <section>
            sdasd
        </section>
        
        </>
    )
}

export default HomeContainer