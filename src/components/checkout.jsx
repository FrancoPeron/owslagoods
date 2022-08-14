import React, {useState, useEffect , useContext } from 'react'
import '../style/components/checkout.css'

//Context
import {cartContexto} from "../context/cartContext";


const Checkout = ()=>{
    
    const {items,totalPrice,removeItem,getStock} = useContext(cartContexto);


     // items.map((item)=>{console.log(getStock(item.id))})

        
        // addDoc(collection(db, 'ventas'),{
        //     items,
        //     date: serverTimestamp(),
        //     total: totalPrice,
        // })
    
    return (
        <section className='checkout'>
            <div className='checkout__box1'>
                <div className='checkout__breadcrumb'>
                    <button>cart  /</button>
                    <button>contact information  /</button>
                    <button>shipping address  /</button>
                    <button>payment</button>
                </div>

                <form action="">
                    <input type="text" />
                </form>
                <button className="bag__total-btn" >checkout</button>

            </div>
            <div className='checkout__box2'>

            {
                (items.length !== 0) 
                ?   <>
                        {items.map( (item) => (
                            <div key={item.id} className="bag-product">
                                <img className="bag-product__img" src={item.imgs} alt=""/>
                                <p className="bag-product__title">{item.name}</p>
                                <p className="bag-product__price">$ {item.price.toFixed(2)} x {item.quantity}</p>
                            </div>
                        ))}

                        <div className="bag__total">
                            <p className="bag__total-price mb-0">Total price: $ {totalPrice.toFixed(2)}</p>
                        </div>
                    </>

                :   <div>
                        <h1>No hay Items</h1>
                        <Link to="/">Btn Home</Link>
                    </div>
            }
            
            </div>
        </section>
    )
}


export default Checkout



