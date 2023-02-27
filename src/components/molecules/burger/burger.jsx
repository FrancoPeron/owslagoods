import React, { useState, useEffect } from 'react'
import './burger.scss'

const Burger = () => {

  let burgerChecked = false
  
  function burgerBox() {
    let burgerbox = document.querySelector(".burger-box");
    (burgerChecked)
      ? burgerbox.classList.add("burger-box--active")
      : burgerbox.classList.remove("burger-box--active")
  }
  
  function overflowHide() {
    (burgerChecked) 
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'
  }
  
  function burgerBtn(){
    burgerChecked = !burgerChecked
    burgerBox();
    overflowHide();
  }

  return (
    <>
      <div className="burger" htmlFor="burger" onClick={burgerBtn}>
      <span className="burger__btn"></span>
      </div>
    </>
  )
}

export default Burger