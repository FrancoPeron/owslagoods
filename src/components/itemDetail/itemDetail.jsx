import React, {useState, useContext} from 'react'

import {Link}  from 'react-router-dom'

import '../../style/components/itemDetail.css'

import SkeletonItemDetail from "./ItemDetailSkeleton.jsx"
import ItemCount from "../itemCount/itemCount.jsx"


import {cartContexto} from "../context/cartContext";

const ItemDetail = ({item})=>{

    const {addItem} = useContext(cartContexto);
    
    const [cant,setCant] = useState([])
    const [show,setShow] = useState([true])
    

    const onAdd = (cant)=>{

        //console.log(data)
        addItem({...item, quantity: cant})
        setCant(cant)
        setShow(false)
    }

    return(
        <>
            {
                (item.length != 0)
                ? 
                    <div className='product-detail'>
                        <div className='product-detail__imgs'>
                            <img className="product-detail__img mb-2" src={item[0].img} alt="jacket black" />
                        </div>  

                        <div className='product-detail__info'>


                            <p className="product-detail__name">{item[0].name}</p>
                            <p className="product-detail__price">{item[0].price}</p>

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


