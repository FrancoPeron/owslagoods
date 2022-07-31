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
        <div className='item-count'>
            <div className="item-count__box">
                <button ref={removeBtn} type="button" className="item-count__btn" onClick={removeProduct}>-</button>
                <p className="item-count__num">{contador}</p>
                <button ref={addBtn} type="button" className="item-count__btn" onClick={addProduct}>+</button>

            </div>

            <button className='add-cant__btn' onClick={()=> onAdd(contador)}>add to bag</button>
        </div>
    )
}

export default ItemCount

// [stock, initial, onAdd]