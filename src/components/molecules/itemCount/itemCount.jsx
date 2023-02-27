import React, { useState, useRef, useEffect } from 'react'
import './itemCount.scss'

const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial)

  const removeBtn = useRef(null)
  const addBtn = useRef(null)

  useEffect(() => {
    if ((contador <= initial)) {
      removeBtn.current.setAttribute('disabled', '')
    }
  })

  const addProduct = () => {
    if (contador < stock) {
      setContador(contador + 1);
      removeBtn.current.removeAttribute('disabled', '')
    }
    if ((contador + 1 >= stock)) {
      addBtn.current.setAttribute('disabled', '')
    }
  }

  const removeProduct = () => {
    if (contador > initial) {
      setContador(contador - 1)
      addBtn.current.removeAttribute('disabled', '')
    }
    if ((contador <= initial)) {
      removeBtn.current.setAttribute('disabled', '')
    }
  }


  return (
    <div className='item-count'>
      <div className="item-count__box">
        <button className="item-count__btn" ref={removeBtn} type="button" onClick={removeProduct}>-</button>
        <p className="item-count__num">{contador}</p>
        <button className="item-count__btn" ref={addBtn} type="button" onClick={addProduct}>+</button>
      </div>

      <button className='btn-ows' onClick={() => onAdd(contador)}><p className='btn-text'>add to bag</p></button>
    </div>
  )
}

export default ItemCount

// [stock, initial, onAdd]