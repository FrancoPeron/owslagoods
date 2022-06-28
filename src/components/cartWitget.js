import React, {useState} from 'react'
import ItemCount from "./itemCount.js";

const product01 = require('../assets/img/owslagoods/product01.jpg');
const product02 = require('../assets/img/owslagoods/product02.jpg');


const CartWidget = ()=>{
    
    const [arrayProducts] = useState([
        {
            id:"item_1",
            img: product01,
            name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
            price: "210.50",
            cant: 1
        },
        {
            id: "item_2",
            img: product02,
            name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
            price: "165.00",
            cant: 1
        }
    ]);
    
    const [totalPrice, setTotalPrice] = useState(arrayProducts.map(item => parseFloat(item.price)).reduce((prev, curr) => prev + curr, 0))

    const onAdd = (data,countId) => {

        arrayProducts.forEach(item => {
            if (item.id === countId) {
                item.cant = data;
            
            }
        });

        let k = arrayProducts.map(item => parseFloat(item.price))
        let j = arrayProducts.map(item => parseInt(item.cant))

        for (let index = 0; index < k.length; index++) {
            k[index] = k[index] * j[index];
            
        }

        setTotalPrice(k.reduce((prev, curr) => prev + curr, 0))

    };

    
    const checkout = () => {
        console.table(arrayProducts)
    };



    return(
        <>
            <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9863 0.0674C11.6777 0.507151 9.89641 2.1782 9.30461 4.4649C9.205 4.85189 9.18156 5.17437 9.15813 6.29427L9.12883 7.66043H5.80656H2.49016L1.24211 16.9949C0.556564 22.1312 -0.00593608 26.4583 -7.67047e-05 26.6049C-7.67047e-05 26.9919 0.205001 27.7248 0.421798 28.1411C0.667892 28.616 1.38274 29.3313 1.85735 29.5776C2.05656 29.6831 2.41985 29.818 2.6718 29.8825C3.11711 29.9998 3.36321 29.9998 14.9648 29.9998C28.0839 29.9998 27.2226 30.0232 28.0663 29.6128C29.162 29.0733 29.9823 27.7775 29.9999 26.5697C30.0058 26.4407 29.4433 22.1312 28.7577 16.9949L27.5097 7.66043H24.1874H20.8593V6.52294C20.8593 4.9457 20.7187 4.20106 20.2382 3.24533C19.4589 1.69155 18.0585 0.565784 16.3769 0.149487C15.7499 -0.00882339 14.5956 -0.0498657 13.9863 0.0674ZM15.8437 2.44205C16.5058 2.61209 16.957 2.87008 17.4609 3.38019C17.9706 3.88444 18.2284 4.33591 18.3984 4.99847C18.4921 5.36786 18.5156 5.6493 18.5156 6.55812V7.66043H14.9999H11.4843V6.55812C11.4843 5.30336 11.5663 4.82843 11.9062 4.18347C12.1523 3.70853 12.8671 2.99321 13.3417 2.74695C14.121 2.33651 15.0175 2.23097 15.8437 2.44205ZM9.14055 11.7941V13.5824H10.3124H11.4843V11.7941V10.0058H14.9999H18.5156V11.7941V13.5824H19.6874H20.8593V11.7941V10.0058H23.162H25.4589L26.5663 18.2848C27.8027 27.5489 27.7441 26.8629 27.3046 27.3026C27.1816 27.4257 26.9765 27.5547 26.8534 27.5899C26.5429 27.6779 3.45695 27.6779 3.14641 27.5899C3.02336 27.5547 2.81828 27.4257 2.69524 27.3026C2.25578 26.8629 2.19719 27.5489 3.43352 18.2848L4.54094 10.0058H6.83781H9.14055V11.7941Z" fill="black"/>
            </svg>


            <div className="" id="bag" aria-labelledby="offcanvasRightLabel">

                <div className="offcanvas-backdrop fade show"></div>

                <div className="bag">

                    <div className="bag__header">
                        <h2 className="bag__header-title" id="offcanvasRightLabel">My Bag</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="bag__body">
                        {
                            arrayProducts.map( (item) => (
                                <div key={item.id} id={item.id} className="bag-product">
                                    <img className="bag-product__img" src={item.img} alt=""/>
                                    <p className="bag-product__title">{item.name}</p>
                                    <p className="bag-product__price">$ {item.price}</p>
                                    <ItemCount stock={6} initial={1} onAdd={onAdd} countId={item.id}/>

                                </div>
                            ))
                        }

                    </div>
                    <div className="bag__total">
                        <p className="bag__total-price mb-0">Total price: $ {totalPrice}</p>
                        <button onClick={checkout} className="bag__total-btn" data-bs-toggle="offcanvas" data-bs-target="#bag">checkout</button>
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default CartWidget