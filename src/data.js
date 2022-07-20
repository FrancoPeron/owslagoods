const product01 = require('./assets/img/owslagoods/product01.jpg');
const product02 = require('./assets/img/owslagoods/product02.jpg');
const product03 = require('./assets/img/owslagoods/product03.jpg');
const product04 = require('./assets/img/owslagoods/product04.png');
const product05 = require('./assets/img/owslagoods/product05.jpg');
const product06 = require('./assets/img/owslagoods/product06.jpg');


const getProducts = () => {
    const arrayProducts = [
        {
            id: 1,
            category: "tops",
            name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
            img: product01,
            price: 210.00,
            stock: 15
        },
        {
            id: 2,
            category: "jackets",
            name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
            img: product02,
            price: 165.00,
            stock: 15
        },
        {
            id: 3,
            category: "jackets",
            name: "SPECTRUM HOODIE // UNISEX",
            img: product03,
            price: 95.50,
            stock: 15
        },
        {
            id: 4,
            category: "jackets",
            name: "GARMENT DYE OWSLA HOODIE APRICOT // UNISEX",
            img: product04,
            price: 95.00,
            stock: 15
        },
        {
            id: 5,
            category: "bottoms",
            name: "GARMENT DYE OWSLA HOODIE PINK // UNISEX",
            img: product05,
            price: 95.00,
            stock: 15
        },
        {
            id: 6,
            category: "accessories",
            name: "'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX",
            img: product06,
            price: 82.00,
            stock: 15
        }
    ]

    return (
        new Promise((res,rej) => {
            setTimeout(()=>{
                res(arrayProducts)
            },2000)
        })
    )
}

export default getProducts