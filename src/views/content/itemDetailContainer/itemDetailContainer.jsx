import React, {useState, useEffect } from 'react'
import './itemDetailContainer.css'

// Router
import { useParams } from "react-router-dom";

// Data Base
import {db} from '@/database/firebase.config'
import {getDoc, collection, doc} from 'firebase/firestore'

// Components
import ItemDetail from "@/components/organism/itemDetail/itemDetail.jsx";

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
        <section className="items-detail-container">

            <ItemDetail item={product}/>
            
        </section>
    )
}

export default ItemDetailContainer