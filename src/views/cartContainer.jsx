import React, {useState, useEffect } from 'react'

// import '../style/views/cartContainer.css'
// import getProducts from'../data.js'


import { useParams } from "react-router-dom";

const cartContainer = ()=>{

    const {id} = useParams();
    const [product,setProduct] = useState([])


    useEffect(()=>{

    
    },)


    return(
        <section className="main-merch__detail">

            dsfgd
            
        </section>
    )
}

export default cartContainer