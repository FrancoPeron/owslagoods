import React, { useState, useEffect, createContext} from 'react'
import Item from '../components/itemList/item';

export const cartContexto = createContext()
const { Provider } = cartContexto;

const CartContext = ({children})=>{

    const [items, setItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        console.log(items)
        setTotalPrice(items.map(item => item.price.toFixed(2) * item.quantity).reduce((prev, curr) => prev + curr, 0))
    
    },[items])
    
    const addItem = (item) =>{
        setItems([...items,item])
    }

    const removeItem = (id) =>{
        setItems(items.filter(item => item.id !== id))
    }

    const isInCart = (id) => {
        return items.findIndex((item) => item.id === id) !== -1;

    };
    const updateItemCant = (item) => {

        setItems(items => 
            items.map(obj => {
                if (obj.id === item.id) {
                    return {...obj, quantity: obj.quantity + item.quantity};
                }
                return obj;
            })
        )
        
    };

    const clear = () => {
        setItems([]);
    }
    
    return(
        <Provider value={{items,totalPrice,addItem,removeItem,isInCart,clear,updateItemCant}}>
            {children}
        </Provider>
    )
}

export default CartContext;