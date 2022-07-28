import React, {useState, useEffect } from 'react'
import '../style/views/itemDetailContainer.css'

//Data Base
import {getDoc, collection, doc} from 'firebase/firestore'
import {db} from '../firebase/firebase.config'

import ItemDetail from "../components/itemDetail/itemDetail.jsx";

import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{

    const {id} = useParams();
    const [product,setProduct] = useState([])


    useEffect(()=>{
        const productsCollection = collection(db,'products');
        getDoc(doc(productsCollection, id))
        .then(result =>{
            const item = {
                id: result.id,
                ...result.data(),
            }
            setProduct(item)
        })
        .catch(error => console.log(error))

    },[id])


    return(
        <section className="main-merch__detail">

            <ItemDetail item={product}/>
            
        </section>
    )
}

export default ItemDetailContainer