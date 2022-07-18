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
            img: product01,
            name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
            price: "210.00",
            category: "tops"
        },
        {
            id: 2,
            img: product02,
            name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
            price: "165.00",
            category: "jackets"
        },
        {
            id: 3,
            img: product03,
            name: "SPECTRUM HOODIE // UNISEX",
            price: "$ 95.00",
            category: "jackets"
        },
        {
            id: 4,
            
            img: product04,
            name: "GARMENT DYE OWSLA HOODIE APRICOT // UNISEX",
            price: "95.00",
            category: "jackets"
        },
        {
            id: 5,
            img: product05,
            name: "GARMENT DYE OWSLA HOODIE PINK // UNISEX",
            price: "95.00",
            category: "bottoms"
        },
        {
            id: 6,
            img: product06,
            name: "'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX",
            price: "82.00",
            category: "accessories"
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