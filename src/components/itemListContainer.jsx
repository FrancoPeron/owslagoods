import React, {useState, useEffect } from 'react'

import ItemList from "./itemList.jsx";

const arrayProducts = [
    {
        id: 1,
        img: "./src/assets/img/owslagoods/product01.jpg",
        name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
        price: "$ 210.00",
        category: "jackets"
    },
    {
        id: 2,
        img: "./src/assets/img/owslagoods/product02.jpg",
        name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
        price: "$ 165.00",
    },
    {
        id: 3,
        img: "./src/assets/img/owslagoods/product03.jpg",
        name: "SPECTRUM HOODIE // UNISEX",
        price: "$ 95.00",
    },
    {
        id: 4,
        
        img: "./src/assets/img/owslagoods/product04.png",
        name: "GARMENT DYE OWSLA HOODIE APRICOT // UNISEX",
        price: "$ 95.00",
    },
    {
        id: 5,
        img: "./src/assets/img/owslagoods/product05.jpg",
        name: "GARMENT DYE OWSLA HOODIE PINK // UNISEX",
        price: "$ 95.00",
    },
    {
        id: 6,
        img: "./src/assets/img/owslagoods/product06.jpg",
        name: "'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX",
        price: "$ 82.00",
    }
]

const promesa = new Promise((res,rej) => {
    setTimeout(()=>{
        res(arrayProducts)
    },2000)
})

const ItemListContainer = ()=>{

    const [products,setProducts] = useState([])
    
    useEffect(()=>{

        promesa.then((data)=>{
            setProducts(data)
            console.log("!! DATA !!")
        })
    })


    return(
        <section className="main-merch__list">

            <ItemList items={products}/>
            
        </section>
    )
}

export default ItemListContainer