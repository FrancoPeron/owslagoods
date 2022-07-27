import React, {useState, useEffect , useContext } from 'react'
import {cartContexto} from "../context/cartContext";
import {Link}  from 'react-router-dom'
import '../style/views/cartContainer.css'

const cartContainer = ()=>{
    
    const {items,totalPrice,removeItem} = useContext(cartContexto);

    useEffect(()=>{
        //items.map(item => console.log(item.quantity))
        console.log(items);
    },)

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
                            <p className="bag-product__price">$ {item.price} x {item.quantity}</p>
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
                <button className="bag__total-btn">checkout</button>
            </div>

        </div>
    )
}

export default cartContainer