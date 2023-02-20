import React, {useState,useEffect, useContext} from 'react'
import './itemDetail.css'

import {Link}  from 'react-router-dom'

// Components
import SkeletonItemDetail from "./ItemDetailSkeleton.jsx"
import ItemCount from "@/components/atoms/itemCount/itemCount.jsx"

//Context
import {cartContexto} from "@/context/cartContext.jsx";

const ItemDetail = ({item})=>{

    const {addItem,isInCart,updateItemCant} = useContext(cartContexto);
    
    const [show,setShow] = useState([true])

    useEffect(() => {

        console.log(item.id)
    
    }, [item])

    const onAdd = (cant)=>{

        if (isInCart(item.id)) {
            updateItemCant({...item, quantity: cant})
        }else{
            addItem({...item, quantity: cant})
        }
        setShow(false)
        
    }

    //console.log(item)

    return(
        <>
            {
                (item.length != 0)
                ?   <div className='product-detail'>
                        <div className='product-detail__imgs'>
                            <img className="product-detail__img mb-2" src={item.imgs} alt={item.name} />
                        </div>  

                        <div className='product-detail__info'>
                            <div className="product-detail__box">
                                <p className="product-detail__name">{item.name}</p>
                                <p className="product-detail__price">$ {item.price.toFixed(2)}</p>
                            </div>
                            {
                                show
                                ?   <ItemCount className='product-detail__item-count' stock={item.stock} initial={1} onAdd={onAdd} />
                                :   <Link to="/cart" className='btn-sbb'>
                                        <p className='btn-text'>Go to Bag</p>
                                        <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38 11L0.999998 11" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M38 11L28 21" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M38 11L28 1" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </Link>
                            }

                            <div className='product-detail__description'>
                                <p className='product-detail__title'>Description</p>
                                <p className='product-detail__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                            </div>
                        

                        </div>

                    </div>

                :   <SkeletonItemDetail />

            }
        
        </>
    )
}

export default ItemDetail


