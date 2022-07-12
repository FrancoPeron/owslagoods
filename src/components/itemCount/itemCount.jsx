import React, {useState, useRef, useEffect} from 'react'


import '../../style/components/itemCount.css'

const ItemCount = ({stock, initial, onAdd, countId})=>{

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

        onAdd(contador + 1,countId)

    }

    const removeProduct = ()=>{
        //console.log(3)

        if (contador> initial) {
            setContador(contador - 1)
            addBtn.current.removeAttribute('disabled','')
        }
        if((contador <= initial)){
            removeBtn.current.setAttribute('disabled','')
        }

        onAdd(contador - 1,countId)
    }


    return (
        <>
            <div className="cant-product">
                <button ref={removeBtn} type="button" className="cant-product__btn" onClick={removeProduct}>-</button>
                <p className="cant-product__num">{contador}</p>
                <button ref={addBtn} type="button" className="cant-product__btn" onClick={addProduct}>+</button>

                {/* <button>agregar al carrito</button> */}
            </div>
        </>
    )
}

export default ItemCount

// [stock, initial, onAdd]