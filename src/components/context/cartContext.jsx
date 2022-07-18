import React, { useState, useEffect, createContext} from 'react'

export const cartContexto = createContext()
const { Provider } = cartContexto;

const CartContext = ({children})=>{

    const [items, setItems] = useState([])

    const getQtyProducts = () => {
        
    }

    useEffect(() => {
        console.log(items)
        getQtyProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    
    const addItem = (item, quantity) =>{
        //console.log(item, quantity)
        
        setItems([...items,item])
    }
    
    const removeItem = (id) =>{
        
    }

    const isInCart = () => {
        return items.findIndex((item) => item.id === id) !== -1;

    };

    const clear = () => {
        // setItems([]);
    }
    
    return(
        <Provider value={{items,addItem,removeItem,isInCart,clear,getQtyProducts}}>
            {children}
        </Provider>
    )
}

export default CartContext;