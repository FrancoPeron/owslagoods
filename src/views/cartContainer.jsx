import React, {useState, useEffect , useContext } from 'react'

import '../style/views/cartContainer.css'

import {cartContexto} from "../components/context/cartContext";

const cartContainer = ()=>{
    
    const {items} = useContext(cartContexto);
    const [totalPrice, setTotalPrice] = useState(items.map(item => parseFloat(item[0].price * item.quantity)).reduce((prev, curr) => prev + curr, 0))


    useEffect(()=>{
        items.map(item => console.log(item.quantity))
    },)

    return(
        <div className="bag">
            <div className="bag__header">
                <h2 className="bag__header-title">My Bag</h2>
                <button type="button" className="btn-close"></button>
            </div>
            <div className="bag__body">
                {
                    items.map( (item) => (
                        <div key={item[0].id} id={item.id} className="bag-product">
                            <img className="bag-product__img" src={item[0].img} alt=""/>
                            <p className="bag-product__title">{item[0].name}</p>
                            <p className="bag-product__price">$ {item[0].price} x {item.quantity}</p>
                            {/* <ItemCount stock={6} initial={1} onAdd={onAdd}/> */}
                        </div>
                    ))
                }
            </div>
            <div className="bag__total">
                <p className="bag__total-price mb-0">Total price: $ {totalPrice}</p>
                <button className="bag__total-btn">checkout</button>
            </div>

        </div>
    )
}

export default cartContainer