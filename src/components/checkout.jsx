import React, {useState, useEffect , useContext } from 'react'
import '../style/components/checkout.css'

import PhoneInput from 'react-phone-number-input'

//Context
import {cartContexto} from "../context/cartContext";

//Data Base
import {db} from '../firebase/firebase.config'
import {addDoc, collection, serverTimestamp,} from 'firebase/firestore'


import { useFormik } from 'formik';
import { async } from '@firebase/util';


const Checkout = ({hideCheckout})=>{
    
    const {items,totalPrice,removeItem,getStock} = useContext(cartContexto);

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const [form, setForm] = useState({});
    const [phoneNum, setPhoneNum] = useState()
    const [venta, setVenta] = useState(false)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit:(values) => {
            setForm({telephone: phoneNum,...values});
            setVenta(true)
        },
    });

    
    useEffect(()=>{
        if(venta){
            console.log(form)
            addDoc(collection(db, 'ventas'),{
                form,
                items,
                date: serverTimestamp(),
                total: totalPrice,
            })
        }
    },[form])
    
    return (
        <section className='checkout'>
            <div className='checkout__box1'>
                <div className='checkout__breadcrumb'>
                    <button>cart /</button>
                    <button className='btn-active'>contact information /</button>
                    <button>shipping address /</button>
                    <button>payment</button>
                </div>

                <p className='checkout__title'>contact information</p>

                <form className='checkout-form' onSubmit={formik.handleSubmit}>

                    <div className='checkout-form__item form-first-name'>
                        <label className='checkout-form__label' htmlFor="firstName">First Name</label>
                        <input
                            className='checkout-form__input'
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                    </div>
                    <div className='checkout-form__item form-last-name'>
                        <label className='checkout-form__label' htmlFor="lastName">Last Name</label>
                        <input
                            className='checkout-form__input'
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </div>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNum}
                        onChange={setPhoneNum}/>
                    <div className='checkout-form__item form-email'>
                        <label className='checkout-form__label' htmlFor="email">Email Address</label>
                        <input
                            className='checkout-form__input'
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>

                    <button type="submit" className="btn-ows">
                        <p className="btn-text">Shipping Address</p>
                        <svg width="39" height="16" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38 11L0.999998 11" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M38 11L28 21" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M38 11L28 1" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </form>


                {/* <div className="checkout__box1-a">
                    <button onClick={hideCheckout} className="checkout__box1-back">Return to cart</button>
                    <button className="btn-ows">
                        <p className="btn-text">Shipping Address</p>
                        <svg width="39" height="16" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38 11L0.999998 11" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M38 11L28 21" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M38 11L28 1" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div> */}

            </div>

            <svg width="2" height="456" viewBox="0 0 2 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.75" y1="3.27835e-08" x2="0.74998" y2="456" stroke="#4D4D4D" stroke-width="1.5"/>
            </svg>

            <div className='checkout__box2'>

          
                {
                items.map( (item) => (
                    <div key={item.id} className="bag-product">
                        <img className="checkout__img" src={item.imgs} alt=""/>
                        <p className="checkout__name">{item.name}</p>
                        <p className="checkout__price">$ {item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                ))
                }
                <span className='hr'></span>

                <div className="checkout__box2-a">
                    <p className="checkout__box2-title mb-0">Total price</p>
                    <p className="checkout__box2-title mb-0">$ {totalPrice.toFixed(2)} USD</p>
                </div>
            
            </div>
        </section>
    )
}


export default Checkout



