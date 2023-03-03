import React, { useState, useEffect, useContext } from 'react'
import './productDetail.scss'

import { Link } from 'react-router-dom'

// Components
import SkeletonItemDetail from "./productDetailSkeleton.jsx"
import ItemCount from "@/components/molecules/itemCount/itemCount.jsx"

//Context
import { cartContexto } from "@/context/cartContext.jsx";

const ProductDetail = ({ item }) => {

  const { addItem, isInCart, updateItemCant } = useContext(cartContexto);
  const [show, setShow] = useState([true])
  const [showImg, setShowImg] = useState("")

  useEffect(() => {


  }, [item])

  const onAdd = (cant) => {
    if (isInCart(item.id)) {
      updateItemCant({ ...item, quantity: cant })
    } else {
      addItem({ ...item, quantity: cant })
    }
    setShow(false)
  }

  return (
    <>
      {(item.length != 0)
        ? <section className='product-detail'>
          <div className='product-detail__imgsbox'>
            <div className='product-detail__imgBox--show'><img className='product-detail__img--show' src={showImg ? showImg : item.imgs[1]} alt="" /></div>
            <div className='product-detail__imgs'>
              {item.imgs.map((img) => <img className="product-detail__img" src={img} alt={item.name} key={img.toString()} onClick={() => setShowImg(img)} />)}
            </div>
          </div>

          <div className='product-detail__info'>

            <div className="product-detail__box">
              <p className="product-detail__name">{item.name}</p>
              <p className="product-detail__price">$ {item.price.toFixed(2)}</p>
            </div>
            {show
              ? <ItemCount className='product-detail__item-count' stock={item.stock} initial={1} onAdd={onAdd} />
              : <Link to="/cart" className='btn-sbb'>
                <p className='btn-text'>Go to Bag</p>
                <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38 11L0.999998 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 11L28 21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M38 11L28 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            }

            <div className='product-detail__description'>
              <p className='product-detail__title'>Description</p>
              <p className='product-detail__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            </div>

          </div>

        </section>

        : <SkeletonItemDetail />

      }
    </>
  )
}

export default ProductDetail


