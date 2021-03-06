import React, {useState, useContext} from 'react'

import {Link}  from 'react-router-dom'

import '../../style/components/itemDetail.css'

import SkeletonItemDetail from "./ItemDetailSkeleton.jsx"
import ItemCount from "../itemCount/itemCount.jsx"


import {cartContexto} from "../../context/cartContext";

const ItemDetail = ({item})=>{

    const {addItem,isInCart,updateItemCant} = useContext(cartContexto);
    
    const [show,setShow] = useState([true])
    

    const onAdd = (cant)=>{

        if (isInCart(item.id)) {
            updateItemCant({...item, quantity: cant})
        }else{
            addItem({...item, quantity: cant})
        }
        setShow(false)
        
    }

    console.log(item)

    return(
        <>
            {
                (item.length != 0)
                ? 
                    <div className='product-detail'>
                        <div className='product-detail__imgs'>
                            <img className="product-detail__img mb-2" src={item.img} alt="jacket black" />
                        </div>  

                        <div className='product-detail__info'>


                            <p className="product-detail__name">{item.name}</p>
                            <p className="product-detail__price">{item.price}</p>

                            {
                                show?
                                <ItemCount stock={6} initial={1} onAdd={onAdd} />
                                :
                                <Link to="/cart" className='product-detail__btn'>Add to bag</Link>
                            }

                        </div>

                    </div>
                : <SkeletonItemDetail />

            }
        
        </>
    )
}

export default ItemDetail


