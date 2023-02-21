import React, {useState, useEffect } from 'react'
import './productDetailView.scss'

// Router
import { useParams } from "react-router-dom";

// Data Base
import {db} from '@/database/firebase.config'
import {getDoc, collection, doc} from 'firebase/firestore'

// Components
import ProductDetail from "@/components/organisms/productDetail/productDetail.jsx";

const ProductDetailView = ()=>{

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
        <main className="items-detail-container">
            <ProductDetail item={product}/>
        </main>
    )
}

export default ProductDetailView