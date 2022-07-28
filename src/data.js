const product01 = require('./assets/img/owslagoods/product01.jpg');
const product02 = require('./assets/img/owslagoods/product02.jpg');
const product03 = require('./assets/img/owslagoods/product03.jpg');
const product04 = require('./assets/img/owslagoods/product04.png');
const product05 = require('./assets/img/owslagoods/product05.jpg');
const product06 = require('./assets/img/owslagoods/product06.jpg');


const getProducts = () => {
    const arrayProducts = [
        {
            category: "tops",
            name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct01.jpg?alt=media&token=207171d4-4e02-49eb-a1a0-992d5cb6bc13",
            price: 210.00,
            stock: 15
        },
        {
            category: "jackets",
            name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct02.jpg?alt=media&token=1743b70d-3917-4c45-add4-6b2447e9f173",
            price: 165.00,
            stock: 15
        },
        {
            category: "jackets",
            name: "SPECTRUM HOODIE // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct03.jpg?alt=media&token=b4f78c07-548b-46bd-afce-43f70e09170c",
            price: 95.50,
            stock: 15
        },
        {
            category: "jackets",
            name: "GARMENT DYE OWSLA HOODIE APRICOT // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct04.png?alt=media&token=01c50931-7347-4092-a3b1-4697e7e3ca5e",
            price: 95.00,
            stock: 15
        },
        {
            category: "bottoms",
            name: "GARMENT DYE OWSLA HOODIE PINK // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct05.jpg?alt=media&token=99ee87f0-d3ca-4b73-ac95-b7fb6f309e73",
            price: 95.00,
            stock: 15
        },
        {
            category: "accessories",
            name: "'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX",
            img: "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct06.jpg?alt=media&token=293b6def-be98-4644-adbc-4525e1451858",
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