import React, {useState, useRef, useEffect} from 'react'


import '../../style/components/itemCount.css'

const ItemCount = ({stock, initial, onAdd})=>{

    const [contador, setContador] = useState(initial)

    const removeBtn = useRef(null)
    const addBtn = useRef(null)
    
    useEffect(() => {
        
        if((contador <= initial)){
            removeBtn.current.setAttribute('disabled','')
        }
    })

    const addProduct = ()=>{

        if (contador < stock) {
            setContador(contador + 1);
            removeBtn.current.removeAttribute('disabled','')
        }
        if((contador + 1 >= stock)){
            addBtn.current.setAttribute('disabled','')
        }

    }

    const removeProduct = ()=>{

        if (contador> initial) {
            setContador(contador - 1)
            addBtn.current.removeAttribute('disabled','')
        }
        if((contador <= initial)){
            removeBtn.current.setAttribute('disabled','')
        }

    }


    return (
        <>
            <div className="cant-product">
                <button ref={removeBtn} type="button" className="cant-product__btn" onClick={removeProduct}>-</button>
                <p className="cant-product__num">{contador}</p>
                <button ref={addBtn} type="button" className="cant-product__btn" onClick={addProduct}>+</button>

                <button className='product-detail__btn' onClick={()=> onAdd(contador)}>agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount

// [stock, initial, onAdd]