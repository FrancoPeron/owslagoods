import React, {useState, useEffect } from 'react'

import '../style/views/itemDetailContainer.css'
import getProducts from'../data.js'
import {db} from '../firebase/firebase.config'
import {getDoc, collection, doc} from 'firebase/firestore'

import ItemDetail from "../components/itemDetail/itemDetail.jsx";

import { useParams } from "react-router-dom";

let promesa = getProducts()

const ItemDetailContainer = ()=>{

    const {id} = useParams();
    const [product,setProduct] = useState([])


    useEffect(()=>{

        const productsCollection = collection(db,'Products');
        getDoc(doc(productsCollection, id))
        .then(result =>{
            const item = {
                id: result.id,
                ...result.data(),
            }
            setProduct(item)
        })
        .catch(error => console.log(error))

        // promesa.then((data)=>{
        //     let newData = id ? data.filter(data => data.id == id): data;
        //     setProduct(newData)
            
        //     console.log("!! DATA !!")
        // })

    },[id])


    return(
        <section className="main-merch__detail">

            <ItemDetail item={product}/>
            
        </section>
    )
}

export default ItemDetailContainer