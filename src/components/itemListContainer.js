const product01 = require('../assets/img/owslagoods/product01.jpg');
const product02 = require('../assets/img/owslagoods/product02.jpg');
const product03 = require('../assets/img/owslagoods/product03.jpg');
const product04 = require('../assets/img/owslagoods/product04.png');
const product05 = require('../assets/img/owslagoods/product05.jpg');
const product06 = require('../assets/img/owslagoods/product06.jpg');

const ItemListContainer = ()=>{
    return(
        <section for="target" className="main-merch__list">

            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product01} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 210.00</p>
            </div>
            
            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product02} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">'FISHTAIL' CANVAS JACKET BLACK // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 165.00</p>
            </div>
            
            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product03} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">SPECTRUM HOODIE // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 95.00</p>
            </div>
            
            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product04} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">GARMENT DYE OWSLA HOODIE APRICOT // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 95.00</p>
            </div>
            
            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product05} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">GARMENT DYE OWSLA HOODIE PINK // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 95.00</p>
            </div>
            
            <div for="product" className="product">
                <div className="position-relative overflow-hidden w-100">
                    <img img="product.img" className="product__img mb-2" src={product06} alt="jacket black" />
                    <button className="product__btn">add to bag</button>
                </div>
                <p data="product.name" className="product__item-name">'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX</p>
                <p data="product.price" className="product__item-price">$ 82.00</p>
            </div>
        </section>
    )
}

export default ItemListContainer