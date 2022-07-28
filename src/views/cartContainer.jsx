import React, {useState, useEffect , useContext } from 'react'
import '../style/views/cartContainer.css'

//Data Base
import {addDoc, collection, serverTimestamp, doc, onSnapshot} from 'firebase/firestore'
import {db} from '../firebase/firebase.config'

//Context
import {cartContexto} from "../context/cartContext";

//Router
import {Link}  from 'react-router-dom'


const cartContainer = ()=>{
    
    const {items,totalPrice,removeItem,getStock} = useContext(cartContexto);

    useEffect(()=>{

        //items.map((item)=>{console.log(item)})
        
    },[items])


    const checkout = ()=>{

        //items.map((item)=>{console.log(getStock(item.id))})
        // items.map( (item) => {
        //     onSnapshot(doc(collection(db, 'products'), item.id), (doc) => {
        //         console.log("Current data: ", doc.data());
        //     });

        //     console.log(item.id)
        // })
        
        addDoc(collection(db, 'ventas'),{
            items,
            date: serverTimestamp(),
            total: totalPrice,
        })


    }

    return(
        <div className="bag">
            <div className="bag__header">
                <h2 className="bag__header-title">My Bag</h2>
                <button type="button" className="btn-close"></button>
            </div>
            <div className="bag__body">
                {

                    (items.length !== 0) 
                    ?
                    items.map( (item) => (
                        <div key={item.id} id={item.id} className="bag-product">
                            <img className="bag-product__img" src={item.img} alt=""/>
                            <p className="bag-product__title">{item.name}</p>
                            <p className="bag-product__price">$ {item.price.toFixed(2)} x {item.quantity}</p>
                            {/* <ItemCount stock={6} initial={1} onAdd={onAdd}/> */}
                            <button onClick={()=>{removeItem(item.id)}}>clear</button>
                        </div>
                    ))
                    :
                    <div>
                        <h1>No hay Items</h1>
                        <Link to="/">Btn Home</Link>
                    </div>
                }
            </div>
            <div className="bag__total">
                <p className="bag__total-price mb-0">Total price: $ {totalPrice.toFixed(2)}</p>
                <button className="bag__total-btn" onClick={checkout}>checkout</button>
            </div>

        </div>
    )
}

export default cartContainer

    // arrayProducts.map((item)=>{
        //     addDoc(collection(db, 'products'),{
        //         ...item,
        //         date: serverTimestamp(),
        //     })
        // })