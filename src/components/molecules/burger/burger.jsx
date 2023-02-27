import React, { useState, useEffect } from 'react'
import './burger.scss'

import { useLocation } from 'react-router-dom';

const Burger = () => {

  let location = useLocation();
  useEffect(() => {
    burgerClose()
  }, [location]);

  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 1024) {
      burgerClose()
    }
  })

  let burgerChecked = false
  
  function burgerActive(classElement, classActive) {
    let element = document.querySelector(classElement);
    (burgerChecked)
      ? element.classList.add(classActive)
      : element.classList.remove(classActive)
  }  
  
  function overflowHide() {
    (burgerChecked) 
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'
  }

  function activeFunctions() {
    burgerActive(".burger", "burger--active")
    burgerActive(".burger-box", "burger-box--active")
    overflowHide();
  }
  
  function burgerToggle() {
    burgerChecked = !burgerChecked
    activeFunctions()
  }
  
  function burgerClose() {
    burgerChecked = false
    activeFunctions()
  }

  return (
    <>
      <div className="burger" htmlFor="burger" onClick={burgerToggle}>
        <span className="burger__btn"></span>
      </div>
    </>
  )
}

export default Burger