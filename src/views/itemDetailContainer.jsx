import React, {useState, useEffect } from 'react'

import '../style/views/itemDetailContainer.css'
import getProducts from'../data.js'
import ItemDetail from "../components/itemDetail/itemDetail.jsx";

import { useParams } from "react-router-dom";

let promesa = getProducts()

const ItemDetailContainer = ()=>{

    const {id} = useParams();
    const [product,setProduct] = useState([])


    useEffect(()=>{

        promesa.then((data)=>{
            let newData = id ? data.filter(data => data.id == id): data;
            setProduct(newData)
            
            console.log("!! DATA !!")
        })
    },[id])


    return(
        <section className="main-merch__detail">

            <ItemDetail item={product}/>
            
        </section>
    )
}

export default ItemDetailContainer