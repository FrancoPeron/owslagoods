import React, { useState, useEffect, useContext } from 'react'
import './checkout.scss'

import Input from 'react-phone-number-input/input'

//Context
import { cartContexto } from "@/context/cartContext.jsx";

//Data Base
import { db } from '@/database/firebase.config'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'

//Fromik
import { useFormik } from 'formik';

const Checkout = ({ hideCheckout }) => {

  const { items, totalPrice } = useContext(cartContexto);

  const [form, setForm] = useState({});
  const [phoneNum, setPhoneNum] = useState()
  const [venta, setVenta] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      setForm({ telephone: phoneNum, ...values });
      setVenta(true)
    },
  });


  useEffect(() => {
    console.log(venta)
    if (venta) {
      console.log(form)
      addDoc(collection(db, 'ventas'), {
        form,
        items,
        date: serverTimestamp(),
        total: totalPrice,
      })
    }
  }, [form])

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
            <input
              required
              placeholder=" "
              className='checkout-form__input'
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <label className='checkout-form__label' htmlFor="firstName">First Name</label>
          </div>
          <div className='checkout-form__item form-last-name'>
            <input
              required
              placeholder=" "
              className='checkout-form__input'
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label className='checkout-form__label' htmlFor="lastName">Last Name</label>
          </div>
          <div className='checkout-form__item form-email'>
            <input
              required
              placeholder=" "
              className='checkout-form__input'
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className='checkout-form__label' htmlFor="email">Email Address</label>
          </div>
          <div className='checkout-form__item form-phone'>
            <Input
              required
              placeholder=" "
              className='checkout-form__input'
              id="phone"
              value={phoneNum}
              onChange={setPhoneNum}
            />
            <label className='checkout-form__label' htmlFor="phone">Telephone</label>
          </div>

          <div className="checkout__btns">
            <button onClick={hideCheckout} className="btn-text">Return to cart</button>
            <button type="submit" className="btn-ows">
              <p className="btn-text">Next Step</p>
              <svg width="39" height="16" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38 11L0.999998 11" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M38 11L28 21" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M38 11L28 1" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </form>
      </div>

      <span className='divider'></span>

      <div className='checkout__box2'>

        <div className='checkout__produtBox'>
          {items.map((item) => (
            <div key={item.id} className="checkout__product">
              <img className="checkout__img" src={item.imgs} alt="" />
              <p className="checkout__name">{item.name}</p>
              <p className="checkout__price">$ {item.price.toFixed(2)} x {item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="checkout__priceBox">
          <p className="checkout__text">Total price</p>
          <p className="checkout__price">$ {totalPrice.toFixed(2)} USD</p>
        </div>

      </div>
    </section>
  )
}


export default Checkout



