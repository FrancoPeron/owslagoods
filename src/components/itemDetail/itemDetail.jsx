import React, {useState,useEffect, useContext} from 'react'

import {Link}  from 'react-router-dom'

import '../../style/components/itemDetail.css'

import SkeletonItemDetail from "./ItemDetailSkeleton.jsx"
import ItemCount from "../itemCount/itemCount.jsx"

import {collection, doc, onSnapshot} from 'firebase/firestore'
import {db} from '../../firebase/firebase.config'


import {cartContexto} from "../../context/cartContext";

const ItemDetail = ({item})=>{

    const {addItem,isInCart,updateItemCant} = useContext(cartContexto);
    
    const [show,setShow] = useState([true])

    useEffect(() => {

        console.log(item.id)
        
    
    }, [item])
    
    

    const onAdd = (cant)=>{

        onSnapshot(doc(collection(db, 'products'), item.id), (i) => {
            console.log(i.data().stock)
        })
    

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
                ? 
                    <div className='product-detail'>
                        <div className='product-detail__imgs'>
                            <img className="product-detail__img mb-2" src={item.img} alt="jacket black" />
                        </div>  

                        <div className='product-detail__info'>

                            
                            <p className="product-detail__name">{item.name}</p>
                            <p className="product-detail__price">$ {item.price.toFixed(2)}</p>
                            
 
                            {
                                show?
                                <ItemCount className='product-detail__item-count' stock={item.stock} initial={1} onAdd={onAdd} />
                                :
                                <Link to="/cart" className='product-detail__btn'>
                                    <p className='product-detail__btn-title'>Go to Bag</p>
                                    <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M38 11L0.999998 11" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M38 11L28 21" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M38 11L28 1" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </Link>
                            }

                            
                            <p className='product-detail__description'>Description</p>
                            <p className='product-detail__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                        

                        </div>

                    </div>
                : <SkeletonItemDetail />

            }
        
        </>
    )
}

export default ItemDetail


