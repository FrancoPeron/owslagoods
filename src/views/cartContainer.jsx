import React, {useState, useEffect , useContext } from 'react'
import '../style/views/cartContainer.css'

//Router
import {Link}  from 'react-router-dom'

//Data Base
import {db} from '../firebase/firebase.config'
import {addDoc, collection, serverTimestamp, doc, onSnapshot,} from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, listAll} from "firebase/storage";

//Context
import {cartContexto} from "../context/cartContext";

const cartContainer = ()=>{
    
    const {items,totalPrice,removeItem,getStock} = useContext(cartContexto);

    useEffect(()=>{

        //items.map((item)=>{console.log(item)})
        
    },[items])

    const storage = getStorage();
    listAll(ref(storage, 'products/tops'))
    .then(async (res) => {
        const { items } = res;
        const urls = await Promise.all(
        items.map((item) => getDownloadURL(item))
        );

        // Array of download URLs of all files in that folder
        console.log(urls);
    })
    .catch((error) => {
        console.log(error);
    });

    const Tops = [
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'GOLD OWSLA LOGO' FRENCH TERRY POCKET CREW BLACK // UNISEX",
            description: "Id velit cupidatat ea dolor voluptate fugiat Lorem sit in. Voluptate aliqua id consectetur amet ullamco incididunt nisi officia culpa cupidatat Lorem deserunt Lorem. Ipsum ipsum excepteur enim magna ex nisi qui incididunt. Anim pariatur amet quis adipisicing sunt incididunt cillum cupidatat elit ut eu. Eiusmod labore quis irure eiusmod aute aute ipsum anim pariatur laboris occaecat proident aute.",
            price: 95.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_001.webp?alt=media&token=8ead4edd-f2a8-4891-a23b-4de3baab6b57",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_002.webp?alt=media&token=0c0fa069-a773-4f3e-9579-17e804b8a030",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA FLOCK LOGO' CLASSIC HOODIE BLACK // UNISEX",
            description: "Quis nostrud irure esse duis adipisicing esse ex ex dolor occaecat. Nisi id labore consectetur consequat ipsum excepteur voluptate deserunt proident proident nulla irure duis eu. Proident et Lorem sint reprehenderit dolor laborum commodo consectetur deserunt sunt Lorem id ea. Commodo proident incididunt nostrud enim deserunt id fugiat do mollit ex. Ut tempor labore magna consectetur aliqua mollit cillum labore tempor reprehenderit irure sint consequat laborum.",
            price: 82.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_003.webp?alt=media&token=64bd1c65-ba9e-43f5-87ed-0aa41705d087",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_004.webp?alt=media&token=cc5e00bf-fca3-4c0f-95f6-8dffa07ab8df",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' CLASSIC T-SHIRT // UNISEX",
            description: "Culpa eu anim mollit nulla commodo aliquip incididunt veniam. Aliquip quis eiusmod consequat pariatur sint proident id sit consectetur laborum non ad qui. Proident ullamco dolore fugiat nostrud nisi. Culpa dolore cupidatat irure anim. Nulla ipsum id nulla non et.",
            price: 40.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_005.webp?alt=media&token=765f80cd-d414-4e16-98a4-7bfb8d157653",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_006.webp?alt=media&token=a0b0c014-7e04-4436-9840-fe8715a67963",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' FRENCH TERRY T-SHIRT BLACK // UNISEX",
            description: "Laboris aliquip consequat veniam tempor id nisi irure laboris. Quis excepteur deserunt ipsum amet officia anim qui occaecat. Nostrud dolore reprehenderit ullamco amet ut nisi quis nulla sint dolore tempor. Ad cillum magna velit enim quis aliqua consectetur minim cupidatat ut cupidatat mollit. Sunt non esse ipsum officia. Ad aliqua sunt do in eu pariatur aliquip aliquip sint aute laborum ipsum et cillum.",
            price: 48.75,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_007.webp?alt=media&token=eca40504-bae7-48c2-94da-9199937053e5",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_008.webp?alt=media&token=cbb11b5a-2262-4cf0-a5c9-526cd46ba9f3",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "‘OWSLA LOGO’ CLASSIC LONG SLEEVE SHIRT // UNISEX",
            description: "Velit do eu et mollit aliqua excepteur proident ullamco laboris est. Dolore cillum exercitation deserunt nostrud sit. Commodo occaecat reprehenderit dolore do do ex sit excepteur elit non culpa et aute aute. Culpa voluptate aliqua reprehenderit occaecat sint. Voluptate id irure minim incididunt excepteur. Magna fugiat duis labore et in incididunt ex veniam eu cupidatat est non. Duis cillum ut incididunt ipsum culpa dolore ad.",
            price: 50.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_009.webp?alt=media&token=44271191-5d04-43fb-b74f-8bba5a95919d",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_010.webp?alt=media&token=e2d30ec6-a0d6-4818-a11d-d91c77459c4d",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "GARMENT DYE OWSLA HOODIE PINK // UNISEX",
            description: "Cupidatat quis duis incididunt id proident proident minim culpa velit. Ipsum minim qui ex esse nulla aliquip ex dolor eu aliqua cupidatat quis enim veniam. Qui nulla amet ipsum proident adipisicing sint duis exercitation minim sint consectetur.",
            price: 95.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_011.webp?alt=media&token=4799e120-70cc-43c2-8d0c-5fe3018e6b0f",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_012.webp?alt=media&token=3d0736eb-6cf5-466b-9a08-b93596a31363",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "GARMENT DYE OWSLA HOODIE APRICOT // UNISEX",
            description: "Est laboris quis amet qui in fugiat. Esse cillum ullamco ut officia irure esse et et deserunt officia deserunt fugiat. Ipsum qui reprehenderit deserunt officia voluptate amet cupidatat velit.",
            price: 95.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_013.webp?alt=media&token=70519c07-29cb-40ac-84ab-f9828b48de20",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_014.webp?alt=media&token=411ff602-238e-48c7-878b-0adaa7496bad",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "RAW EDGE LOGO PATCH CREW // UNISEX",
            description: "Aute Lorem aliqua sint proident. Culpa magna non voluptate elit adipisicing. Et sit Lorem sit ut dolore ex dolore exercitation et cupidatat adipisicing exercitation aliqua. Excepteur occaecat fugiat velit ea ullamco esse nisi do. Qui esse veniam sit qui id incididunt sit deserunt ipsum tempor nisi voluptate. Ea ad ut esse eu cillum id eu culpa amet velit.",
            price: 75.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_015.webp?alt=media&token=ea185151-5aad-4b33-98d0-3bf0d0c5371c",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_016.webp?alt=media&token=e304c761-68bd-4f03-8561-f8a1a2cf952e",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "GARMENT DYE OWSLA PATCH CREW // UNISEX",
            description: "Dolore laboris commodo laborum pariatur quis dolore dolore ad ipsum sint. Minim in sunt irure amet. Aliqua voluptate sunt quis deserunt nisi fugiat est. Sint voluptate incididunt quis do aliqua ullamco ullamco est. Ipsum qui duis nostrud nostrud incididunt dolore ipsum ea duis eu do tempor pariatur. Anim incididunt sit excepteur amet. Tempor id nulla elit reprehenderit ea eu voluptate id.",
            price: 80.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_017.webp?alt=media&token=81fb59e0-601a-451e-bf75-7c69df9cb1b1",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_018.webp?alt=media&token=dab907d5-be5e-42fa-8af8-04f166a6a77b",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "GARMENT DYE OWLSA PATCH CREW MOSS // UNISEX",
            description: "Incididunt proident nisi mollit esse in tempor et quis. Nostrud ipsum consequat incididunt qui Lorem nulla labore quis anim adipisicing ullamco cupidatat. Non duis reprehenderit dolore in fugiat in in enim culpa dolore aliquip pariatur. Lorem Lorem velit dolor velit qui adipisicing magna laboris. Ad nulla magna veniam nisi ex officia id et quis laborum elit in amet nulla.",
            price: 85.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_019.webp?alt=media&token=d7aa381c-50b6-4694-bf40-cee5dd19d8bb",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_020.webp?alt=media&token=88c1c776-c489-4b7f-9438-3e8c2931c628",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'SPECTRUM' CROP T-SHIRT // BLACK,",
            description: "Reprehenderit tempor aliqua mollit sit. Culpa deserunt mollit eiusmod voluptate eiusmod Lorem consectetur elit voluptate qui eiusmod et. Ea veniam do voluptate esse aliquip tempor proident magna dolor eu occaecat.",
            price: 30.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_021.webp?alt=media&token=917a4dac-3e87-4fa8-a041-a522b4735b06",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_022.webp?alt=media&token=3be42b0a-9770-4198-8608-3d343658288f",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'GARMENT DYE PATCH LOGO' T-SHIRT // SILVER // UNISEX",
            description: "Voluptate dolore esse do culpa occaecat aute. Dolore veniam veniam cillum cillum elit amet. Qui ullamco in veniam ea. Aliquip cillum aliqua elit culpa elit eiusmod in ad ad nulla.",
            price: 45.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_023.webp?alt=media&token=049b2b9e-86d5-4e92-9387-8ff2656a2128",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_024.webp?alt=media&token=acce9237-9678-4992-a4bb-f2525698f8a8",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_025.webp?alt=media&token=23c65913-8bcf-40b9-a435-d3b884a41641",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'GARMENT DYE PATCH LOGO' T-SHIRT // GOLD //  UNISEX",
            description: "Dolor dolore voluptate in aliquip do labore in minim quis qui amet consequat consectetur. Excepteur ut commodo cillum nostrud occaecat duis eu ad ad duis. Pariatur magna et ad reprehenderit culpa eu aliquip.",
            price: 45.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_026.webp?alt=media&token=cbc90509-e77f-4dae-9c92-e2bff2920404",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_027.webp?alt=media&token=40afe020-566f-4fd1-9d27-eebfcf1a5c92",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_028.webp?alt=media&token=62bae472-e503-45b4-9467-9fed5df2eeaa",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' SCALLOP TEE BLACK // UNISEX",
            description: "Cillum incididunt Lorem elit voluptate. Enim esse deserunt dolor dolor ex culpa aliqua cillum exercitation sunt non pariatur sunt quis. Fugiat ad magna id officia commodo deserunt duis mollit proident excepteur mollit veniam exercitation. Veniam magna amet ullamco in nisi aliqua dolor minim mollit est culpa sunt sint cillum. In velit Lorem dolor deserunt voluptate ad do quis elit amet laborum incididunt officia ut.",
            price: 40.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_029.webp?alt=media&token=e1faa814-994c-4735-b588-adfe9a3d6cd8",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_030.webp?alt=media&token=c5e95dde-cca7-4013-a245-f93fbabafcc0",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' SCALLOP LONG SLEEVE BLACK // UNISEX",
            description: "Lorem cupidatat magna non fugiat adipisicing eiusmod enim voluptate nostrud ipsum ut quis est aliqua. Proident ipsum adipisicing proident ullamco. Velit irure laboris exercitation qui commodo reprehenderit velit consectetur eiusmod anim id ut. Adipisicing non mollit sit minim.",
            price: 45.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_031.webp?alt=media&token=d86b3157-e4ac-4eb1-8cd3-9ae5a19ee3c8",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_032.webp?alt=media&token=7f5a9d89-5d3b-4f57-a140-279cdb424c7c",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'GARMENT DYE PATCH LOGO' T-SHIRT GREEN // UNISEX",
            description: "Consequat elit et cupidatat dolor proident magna labore sit sunt. Qui excepteur Lorem exercitation nisi laboris anim enim pariatur id minim id Lorem Lorem. Elit ullamco pariatur culpa ut veniam cupidatat Lorem do pariatur nostrud amet ad. Cillum consectetur minim proident consectetur in duis ullamco aute Lorem irure ex sunt. Qui nulla reprehenderit laborum dolor consequat consequat aliquip aliqua labore officia eiusmod proident eu. Ex occaecat veniam duis proident reprehenderit deserunt velit labore incididunt. Exercitation officia velit labore consequat minim ea cupidatat laborum dolor cupidatat velit ullamco.",
            price: 42.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_033.webp?alt=media&token=f426fad7-89d9-408b-b49f-1ad2a0e36a90",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_034.webp?alt=media&token=ae7330d4-5cf0-4eb0-b270-77c6f45709fb",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'GARMENT DYE PATCH LOGO' T-SHIRT CEMENT // UNISEX",
            description: "Et cillum aliquip reprehenderit ad consequat deserunt eu cillum. Minim ut nostrud consectetur reprehenderit laborum officia. Dolore consectetur cupidatat consequat sint commodo. Laborum nulla Lorem voluptate minim id proident ullamco qui eu laborum ut tempor reprehenderit.",
            price: 25.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_035.webp?alt=media&token=7ac649c2-cff4-46cd-a1d1-de1c3738bf92",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_036.webp?alt=media&token=6e5b6677-c91e-470e-86ca-1a5a55692d0d",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' SCALLOP LOGO LONG SLEEVE TEE BLACK // UNISEX",
            description: "Sint laboris tempor sit incididunt incididunt elit mollit. Anim laborum Lorem sit laboris dolore qui magna ipsum commodo nostrud velit occaecat et consequat. Ad amet ullamco esse amet voluptate nulla do qui laboris dolor. Aute occaecat velit est veniam duis aliqua cillum occaecat excepteur cillum. Voluptate pariatur sint amet pariatur nisi reprehenderit incididunt ipsum nulla eiusmod eiusmod commodo. Labore in excepteur ea sint dolor ullamco quis laboris. Labore consectetur anim aliquip anim deserunt consectetur enim voluptate deserunt culpa fugiat pariatur laboris.",
            price: 30.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_037.webp?alt=media&token=a79d6fb9-dcb7-4680-8de0-a9baef526230",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_038.webp?alt=media&token=82d0d3b7-e0df-456b-a6bf-8975e3f1ed53",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "LONG CLOTHING x OWSLA MA1 BOMBER JACKET // UNISEX",
            description: "Consequat commodo magna Lorem ad non eiusmod labore eiusmod ullamco. Nisi consequat proident cillum occaecat et occaecat aute ea et eu. Lorem mollit commodo sit proident nostrud elit laboris ut reprehenderit quis aliqua quis est fugiat. Fugiat nostrud proident aute exercitation excepteur incididunt culpa anim eu. Do occaecat nostrud qui reprehenderit qui labore. Nisi mollit nostrud do officia aliqua.",
            price: 210.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_039.webp?alt=media&token=b4f35534-2bd4-4f0c-bda1-55f7a387eb67",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_040.webp?alt=media&token=04007eb0-df63-4307-ab16-f0936ac03f5a",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FISHTAIL' CANVAS JACKET BLACK // UNISEX",
            description: "Proident deserunt qui adipisicing veniam cupidatat sit excepteur pariatur in enim id magna laborum. Nisi labore magna nisi nisi aliquip sunt magna nisi irure laborum veniam consectetur. Irure voluptate laboris aliquip minim proident fugiat aute ut ullamco irure consectetur qui. Ex id elit officia magna Lorem minim. Consectetur amet mollit consectetur proident cillum qui. Velit proident reprehenderit tempor consequat cillum aliquip magna mollit. Veniam pariatur sunt fugiat dolore officia labore magna sunt voluptate.",
            price: 165.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_041.webp?alt=media&token=55310d29-1d15-45e7-b9cb-7c515e9731eb",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_042.webp?alt=media&token=4631790b-3ff3-460c-96a4-a13f99b03f29",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' RAW EDGE HOODIE // BLACK",
            description: "Ad quis velit ea nisi nostrud cupidatat. Aliquip exercitation sit aliqua qui duis eu cillum officia et do cillum Lorem. Adipisicing tempor est proident cillum in voluptate in fugiat culpa reprehenderit minim. Dolor ipsum irure nisi nisi excepteur veniam culpa laboris. Esse incididunt duis cupidatat ad. Veniam mollit voluptate nostrud sit consectetur magna nisi nulla esse pariatur aute magna amet.",
            price: 75.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_043.webp?alt=media&token=b859be9f-736b-4d1d-a358-9e07578fd585",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_044.webp?alt=media&token=b81d4972-a7a6-4a7d-8d55-de86b58864ce",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_045.webp?alt=media&token=fa9f66d3-f414-409b-8023-6863fbae315f",
            ]
        },
    
    
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "ALL DENIM JACKET BLACK // UNISEX",
            description: "Deserunt non magna aute duis laborum consectetur consectetur cillum consequat nulla. Mollit excepteur id excepteur pariatur tempor ad ut labore mollit elit dolore velit. Quis sit eu sint dolor ipsum cillum do.",
            price: 155.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_046.webp?alt=media&token=7cec1a7d-991f-44c1-84af-f968d6c8612b",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_047.webp?alt=media&token=5599ba7d-2979-414a-9ec9-2473ca3569af",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'NEMESIS' FLEECE HOODIE BLACK // UNISEX",
            description: "Consequat laborum ipsum nulla magna qui consectetur ea reprehenderit cillum aute occaecat aliqua adipisicing cillum. Nisi non laborum veniam dolor proident ad proident. Voluptate non veniam duis do incididunt. Deserunt incididunt id minim consequat proident ut sit eu aliqua pariatur voluptate excepteur sit voluptate. Pariatur excepteur in commodo ipsum occaecat ea.",
            price: 80.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_048.webp?alt=media&token=25a9628f-e1c0-4f43-83e3-6299ae294fbf",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_049.webp?alt=media&token=76888be4-c9a9-4808-824c-2c6c568ca79a",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'TOKYO' FLEECE HOODIE BLACK // UNISEX",
            description: "Amet dolor labore labore commodo tempor cillum est. Occaecat esse nostrud dolor anim dolor velit mollit nulla velit cupidatat cupidatat irure. Nisi culpa duis est magna. Fugiat anim sunt officia magna sunt pariatur enim irure cupidatat magna sunt. Mollit incididunt elit adipisicing occaecat quis laborum tempor eu culpa dolor labore laboris in cupidatat. Proident ex ullamco veniam magna esse adipisicing reprehenderit fugiat esse minim quis cillum ex.",
            price: 80.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_050.webp?alt=media&token=089bc532-755c-41f4-95fc-c8ecb46dedf2",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_051.webp?alt=media&token=53cca87b-d609-4639-97d7-5055386ae40d",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FRENCH TERRY PATCH LOGO' POCKET CREW BLACK // UNISEX",
            description: "Est et consequat sint excepteur velit amet esse anim anim. Nisi id sit laborum mollit nisi. Ex occaecat ipsum pariatur eiusmod ad est cupidatat laborum do pariatur amet pariatur. Tempor occaecat dolor voluptate commodo commodo dolore velit nostrud irure duis Lorem sint pariatur.",
            price: 80.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_052.webp?alt=media&token=5d6203c1-eb17-4bbb-bcbf-f79a21c7fe43",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_053.webp?alt=media&token=12dbbed7-4c89-431c-b11a-943f69b2e9a6",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FRENCH TERRY PATCH LOGO' POCKET CREW GREEN // UNISEX",
            description: "Reprehenderit aliqua amet tempor non ullamco. Dolore adipisicing eu veniam nulla occaecat voluptate. Ullamco pariatur adipisicing ex incididunt ad incididunt adipisicing ut ut ullamco occaecat. Ut id ex sint sit nulla quis magna exercitation nostrud ut ut nostrud. Officia reprehenderit aliqua exercitation mollit velit duis consequat duis. Ad deserunt veniam id fugiat deserunt cillum. Velit Lorem cupidatat voluptate sit quis laboris sunt nostrud officia esse consequat laborum reprehenderit et.",
            price: 60.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_054.webp?alt=media&token=bc2062a6-1d9c-467b-be14-0ac39e38448e",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_055.webp?alt=media&token=ddbfcef4-0e6e-4c88-ad0f-33ec287e7c0a",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA PATCH' CREW SWEATSHIRT BLACK // UNISEX",
            description: "Labore ad sunt officia sint cupidatat minim proident laboris veniam aliquip dolore pariatur ipsum. Pariatur deserunt fugiat esse eu pariatur. Incididunt do enim sint tempor in ex adipisicing pariatur nisi. Culpa consequat laborum officia tempor non cupidatat esse dolore nisi ex culpa irure excepteur. Anim in deserunt ex et elit ut pariatur sint reprehenderit aliqua aute enim.",
            price: 55.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_056.webp?alt=media&token=c102f827-266e-47db-9d20-b48e6dff5a4b",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_057.webp?alt=media&token=f5fb8c24-fb56-4b14-8106-d08dbdb69978",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FOREST PATCH' CREW SWEATSHIRT BLACK // UNISEX",
            description: "Commodo est anim ut proident exercitation aute occaecat enim occaecat cillum magna et sunt. Ad qui cupidatat sunt culpa. Consectetur mollit nulla duis excepteur quis. Aute eu labore tempor sunt eiusmod exercitation dolore eu. Quis voluptate deserunt labore ipsum Lorem. Fugiat aliqua sint amet irure sit. Sint nulla nostrud labore reprehenderit aute reprehenderit Lorem.",
            price: 65.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_058.webp?alt=media&token=079f57b1-7cd3-4eff-9264-592b4c3743f2",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_059.webp?alt=media&token=9d46f65c-399f-4bff-9c4a-f20a44c67a34",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'NOT A TEST' CREWNECK // UNISEX",
            description: "Tempor sunt ea elit sunt. Veniam laboris exercitation adipisicing ea officia esse mollit laborum duis velit. Nisi consequat aliqua nisi dolore aute enim. Deserunt sit ullamco labore commodo occaecat.",
            price: 25.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_060.webp?alt=media&token=f2d1ed2f-7c0e-4b73-99ca-1a3682cb775e",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_061.webp?alt=media&token=049ba723-4650-46a2-8593-422554fba7ee",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' LONG SLEEVE THERMAL SHIRT CEMENT // UNISEX",
            description: "Proident laborum nulla cillum ad enim incididunt eiusmod. Veniam duis ut sunt consectetur consequat esse excepteur nostrud sit veniam. Dolore sunt adipisicing proident id labore culpa esse enim laborum officia duis labore non. Ad aliqua veniam do pariatur nisi do velit. Tempor enim nostrud velit esse et. Ut quis minim labore cillum ea fugiat velit aute cupidatat anim Lorem id. Consectetur sunt in nisi sit incididunt ex elit incididunt commodo.",
            price: 42.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_062.webp?alt=media&token=30bb06b0-3594-49f0-aa08-cb2151ffac67",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_063.webp?alt=media&token=4e49b973-dd0f-4e20-8ed1-9c0cf8ac13d2",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'OWSLA LOGO' SHORT SLEEVE THERMAL SHIRT CEMENT // UNISEX",
            description: "Consectetur sunt nisi mollit cupidatat duis. Esse quis duis nostrud nostrud fugiat ipsum officia ut nulla proident et sunt consectetur proident. Dolor reprehenderit velit qui ex voluptate anim mollit nulla reprehenderit sit. Adipisicing anim Lorem esse ut nisi consequat officia laboris.",
            price: 40.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_064.webp?alt=media&token=e591a715-ff95-40c1-8c5b-c1f8e6d18f1c",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_065.webp?alt=media&token=22455333-9ef4-4326-9c42-821c53da578d",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FRENCH TERRY PATCH LOGO' SHIRT CEMENT // UNISEX",
            description: "Lorem et adipisicing culpa dolor do enim id quis occaecat Lorem. Irure amet id incididunt laboris eiusmod ipsum non ullamco eu. Ut adipisicing ipsum ut tempor sunt aute ullamco veniam dolore consectetur. Aute ipsum eu consectetur dolor duis occaecat eu aliqua culpa ex.",
            price: 50.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_066.webp?alt=media&token=47250bf2-5e09-461b-907d-776f33bf35ad",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_067.webp?alt=media&token=f455666f-a4d7-4d60-918d-229cb30b482e",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'STREET PANIC' T-SHIRT BLACK // UNISEX",
            description: "Aliquip id irure fugiat nulla commodo enim consectetur nulla consectetur voluptate sit enim. Sunt voluptate incididunt commodo ipsum aliqua non. Voluptate cillum cupidatat aliquip occaecat irure quis. Ea consequat non velit sunt labore sit Lorem non. Qui laborum proident Lorem veniam elit laboris veniam officia. Amet dolor adipisicing sunt ipsum sit sunt.",
            price: 24.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_068.webp?alt=media&token=bced15db-7624-4e1d-b017-52aa850d9236",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_069.webp?alt=media&token=f70e12d1-8769-46a0-a213-45dc3ee1ef43",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'STREET PANIC' T-SHIRT CEMENT // UNISEX",
            description: "Non duis ea officia anim. Cillum enim excepteur do ut cupidatat consectetur eu laboris Lorem. Culpa do sunt culpa ipsum occaecat reprehenderit et adipisicing occaecat sint sint do sunt. Officia magna commodo velit enim laborum aliqua mollit exercitation commodo velit. Voluptate et dolore sit esse laboris elit excepteur dolore pariatur qui magna deserunt id.",
            price: 24.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_070.webp?alt=media&token=4f376a52-7d1e-4f22-88e7-1c5cb5d1ec8d",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_071.webp?alt=media&token=fd74c354-e45e-4cca-85a5-4e76d7ce68e4",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FIGURE IT OUT' T-SHIRT BLACK // UNISEX",
            description: "Ullamco pariatur laboris esse occaecat cupidatat tempor dolore culpa aute proident aliqua qui magna et. Sint nisi sit duis exercitation magna quis nulla veniam labore. Do nisi consequat sunt sint duis minim adipisicing consectetur ea. Cillum dolore magna sint commodo anim dolore occaecat sint nulla non cupidatat anim exercitation. Aute minim ipsum do sint ullamco aliqua deserunt pariatur. Laboris culpa excepteur magna nisi deserunt officia dolore excepteur dolore.",
            price: 24.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_072.webp?alt=media&token=ee10731d-e2db-4717-ad09-15fe1b859fb4",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_073.webp?alt=media&token=64534981-1f51-4cbb-bf2a-e9bb8079addd",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'FIGURE IT OUT' T-SHIRT GREEN // UNISEX",
            description: "Lorem consectetur proident ea sunt officia Lorem dolore cupidatat. Non tempor esse qui et aliquip proident laboris reprehenderit voluptate consequat excepteur consectetur. In officia velit cupidatat velit aliqua duis elit occaecat reprehenderit.",
            price: 24.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_074.webp?alt=media&token=5f561dc7-9c8e-459f-8c48-ad3171a0a168",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_075.webp?alt=media&token=16692214-6857-4d69-ac0e-98e0b64a71eb",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'RED FLAMES' LONG SLEEVE SHIRT // UNISEX",
            description: "Eiusmod enim voluptate nisi pariatur culpa. Ea adipisicing et consequat id minim. Cupidatat fugiat officia ullamco occaecat ullamco ad in amet. Ipsum dolor culpa exercitation laboris culpa dolor ad.",
            price: 25.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_076.webp?alt=media&token=a0ad85e9-d91d-4652-8c2b-2ca705fbffec",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_077.webp?alt=media&token=7b97988e-8982-4fc0-9c61-0d589eade94f",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'DISRUPTION' CREWNECK // UNISEX",
            description: "Cillum eiusmod proident ut consequat sunt occaecat officia in officia sint. Enim dolor consectetur incididunt officia officia excepteur enim ipsum anim. Amet ex ad excepteur laborum. Cupidatat laborum aliqua sit proident esse ipsum qui non cillum mollit ex ipsum. Occaecat irure aliqua eiusmod ullamco sunt sit aliqua do cillum dolor minim laborum minim. Culpa ipsum laborum commodo cupidatat fugiat duis do ea.",
            price: 25.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_078.webp?alt=media&token=adb986ef-c490-4ecb-8eeb-b4a0701d8b4d",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_079.webp?alt=media&token=e8f5cbbe-a8e7-4ee5-b20d-adb0c13e5dad",
            ]
        },
        {
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "'AIN'T YOUR GIRL' LONG SLEEVE BODYSUIT",
            description: "Excepteur id velit est sint minim. Veniam cillum aliquip est deserunt. Tempor sunt cupidatat occaecat labore eiusmod velit labore laboris culpa consectetur ex ipsum occaecat ad.",
            price: 22.00,
            stock: 10,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_080.webp?alt=media&token=e3d58cd6-6b48-49c4-81de-c73096140dad",
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftops%2Ftop_081.webp?alt=media&token=59f6c7c2-a9bc-4ed9-825f-a4b4eeee83fc"
            ]
        },
    
    ]
    


    const checkout = ()=>{

        Tops.map((item)=>{
            addDoc(collection(db, 'products'),{
                ...item,
                date: serverTimestamp(),
            })
        })

       
        // items.map((item)=>{console.log(getStock(item.id))})


        // items.map( (item) => {
        //     onSnapshot(doc(collection(db, 'products'), item.id), (doc) => {
        //         console.log("Current data: ", doc.data());
        //     });

        //     console.log(item.id)
        // }
       // const storage = getStorage();

        
        // addDoc(collection(db, 'ventas'),{
        //     items,
        //     date: serverTimestamp(),
        //     total: totalPrice,
        // })


    }

    return(
        <div className="bag">
                <h2 className="bag__header-title">My Bag</h2>
            <div className="bag__body">
                {

                    (items.length !== 0) 
                    ?
                        <>
                            {items.map( (item) => (
                                <div key={item.id} className="bag-product">
                                    <img className="bag-product__img" src={item.imgs} alt=""/>
                                    <p className="bag-product__title">{item.name}</p>
                                    <p className="bag-product__price">$ {item.price.toFixed(2)} x {item.quantity}</p>

                                    <span className='hr'></span>

                                    <button className="trash__btn" onClick={()=>{removeItem(item.id)}}>
                                        <svg className="trash__ico cursor-pointer p-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                            <g transform="translate(-89.25 -860.75)">
                                                <line class="trash__ico-a" x2="24" transform="translate(90.5 867)"></line>
                                                <path class="trash__ico-b" d="M2,0h8a2,2,0,0,1,2,2V5a0,0,0,0,1,0,0H0A0,0,0,0,1,0,5V2A2,2,0,0,1,2,0Z" transform="translate(96.5 862)"></path>
                                                <path class="trash__ico-b" d="M0,0H18L16,17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Z" transform="translate(93.5 867)"></path>
                                            </g>
                                        </svg>
                                        <p class="trash__btn-title">remove</p>
                                    </button>

                                    
                                </div>
                            ))}

                            <div className="bag__total">
                                <p className="bag__total-price mb-0">Total price: $ {totalPrice.toFixed(2)}</p>
                                <button className="bag__total-btn" onClick={checkout}>checkout</button>
                            </div>
                        </>
                    :
                        <div>
                            <h1>No hay Items</h1>
                            <Link to="/">Btn Home</Link>
                        </div>
                }
            </div>

        </div>
    )
}

export default cartContainer



/* 
Cargar Datos

arrayProducts.map((item)=>{
    addDoc(collection(db, 'products'),{
        ...item,
        date: serverTimestamp(),
    })
})
 */
/* 
Saber urls de Datos

listAll(ref(storage, 'products'))
.then(async (res) => {
    const { items } = res;
    const urls = await Promise.all(
    items.map((item) => getDownloadURL(item))
    );

    // Array of download URLs of all files in that folder
    console.log(urls);
})
.catch((error) => {
    console.log(error);
});
 */