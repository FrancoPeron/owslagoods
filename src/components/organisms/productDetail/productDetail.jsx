import React, { useState, useEffect, useContext } from 'react'
import './productDetail.scss'

import { Link } from 'react-router-dom'

// Components
import ProductDetailSkeleton from "./productDetailSkeleton.jsx"
import ItemCount from "@/components/molecules/itemCount/itemCount.jsx"

//Context
import { cartContexto } from "@/context/cartContext.jsx";

const ProductDetail = ({ item , resetKey }) => {

  const { addItem, isInCart, updateItemCant } = useContext(cartContexto);

  // const [show, setShow] = useState([true])
  const [show, setShow] = useState(true)
  const [showImg, setShowImg] = useState("")
  const [showImg2, setShowImg2] = useState("")
  const [loadedImg, setLoadedImg] = useState(false);

  useEffect(() => {
    setShow(true);
    if(!isEmpty(item)){setShowImg(item.imgs[item.imgs.length-1])}
  }, [item,loadedImg])

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const onAdd = (cant) => {
    if (isInCart(item.id)) {
      updateItemCant({ ...item, quantity: cant })
    } else {
      addItem({ ...item, quantity: cant })
    }
    setShow(false)
  }

  const showImgStyle = {
    display: loadedImg ? 'block' : 'none',
  }

  return (

    <>
      {!(isEmpty(item))
        ? <section key={resetKey} className='product-detail'>

          <div className='product-detail__imgsbox'>
            <div className='product-detail__imgBox--show'>
            {!loadedImg && <></>}
              <img className='product-detail__img--show' onLoad={() => setLoadedImg(true)} src={showImg} alt={item.name} style={showImgStyle} />
            </div>
            <div className='product-detail__imgs'>
              {item.imgs.map((img) => <img className="product-detail__img" onLoad={() => setLoadedImg(true)} src={img} alt={item.name} key={img.toString()} onClick={() => setShowImg(img)}  style={showImgStyle} />)}
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
        : <div className='product-detail'><ProductDetailSkeleton /></div>
      }
    </>
  )
}

export default ProductDetail


