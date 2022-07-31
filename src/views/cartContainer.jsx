import React, {useState, useEffect , useContext } from 'react'
import '../style/views/cartContainer.css'

//Router
import {Link}  from 'react-router-dom'

//Data Base
import {db} from '../firebase/firebase.config'
import {addDoc, collection, serverTimestamp, doc, onSnapshot} from 'firebase/firestore'

//Context
import {cartContexto} from "../context/cartContext";

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
                <h2 className="bag__header-title">My Bag</h2>
            <div className="bag__body">
                {

                    (items.length !== 0) 
                    ?
                        <>
                            {items.map( (item) => (
                                <div key={item.id} className="bag-product">
                                    <img className="bag-product__img" src={item.img} alt=""/>
                                    <p className="bag-product__title">{item.name}</p>
                                    <p className="bag-product__price">$ {item.price.toFixed(2)} x {item.quantity}</p>

                                    <span className='hr'></span>

                                    <button class="trash__btn" onClick={()=>{removeItem(item.id)}}>
                                        <svg class="trash__ico cursor-pointer p-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                            <g transform="translate(-89.25 -860.75)">
                                                <line class="trash__ico-a" x2="24" transform="translate(90.5 867)"></line>
                                                <path class="trash__ico-b" d="M2,0h8a2,2,0,0,1,2,2V5a0,0,0,0,1,0,0H0A0,0,0,0,1,0,5V2A2,2,0,0,1,2,0Z" transform="translate(96.5 862)"></path>
                                                <path class="trash__ico-b" d="M0,0H18L16,17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Z" transform="translate(93.5 867)"></path>
                                            </g>
                                        </svg>
                                        <p class="trash__btn-title">remove</p>
                                    </button>

                                    
                                </div>
                            ))}

                            <div className="bag__total">
                                <p className="bag__total-price mb-0">Total price: $ {totalPrice.toFixed(2)}</p>
                                <button className="bag__total-btn" onClick={checkout}>checkout</button>
                            </div>
                        </>
                    :
                        <div>
                            <h1>No hay Items</h1>
                            <Link to="/">Btn Home</Link>
                        </div>
                }
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