
const getProducts = () => {
    const arrayProducts = [
        {   
            collection: "OWSLA Clasics",
            category: "Tops",
            name: "OWSLA FLAG CREWNECK // UNISEX",
            description: "Eu in sint excepteur enim non anim ex ex deserunt. Veniam dolore in fugiat esse ullamco nostrud anim. Ea consequat aute sit adipisicing consequat sit Lorem nostrud in.",
            price: 210.00,
            stock: 15,
            imgs:[
                "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/Products%2Fproduct01.jpg?alt=media&token=207171d4-4e02-49eb-a1a0-992d5cb6bc13"
            ]
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

/*
  {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "JAS DAVIS - 'NIGHT SHOW' LONG TAIL EXCLUSIVE T-SHIRT // UNISEX",
        description: "Irure ex laboris ad amet nisi officia deserunt id laboris qui occaecat id. Exercitation adipisicing cupidatat et sint adipisicing eiusmod cupidatat ut ipsum id. Non dolore Lorem minim enim cupidatat laboris elit deserunt labore ullamco eu voluptate culpa nulla. Ullamco sunt ipsum ullamco sint eiusmod ex do. Sunt sunt tempor eu eu sunt. Est nisi exercitation esse cillum dolore sit culpa ipsum nulla pariatur veniam ad labore. Tempor voluptate adipisicing dolore pariatur incididunt cupidatat adipisicing nostrud reprehenderit duis exercitation magna id excepteur.",
        price: 45.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
*/



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













'PATCH LOGO' FLEECE SWEATPANT
55.00

'NEMESIS' FLEECE SWEATPANT
55.00




'JUNGLE' PHONE CASE
12.50

'BALLOON' PHONE CASE
12.50



WIWEK X SKRILLEX X ELLIPHANT 'KILLA (SLUSHII RMX)' T-SHIRT // UNISEX
25.00

SKRILLEX 'SKRILL' SHORT SLEEVE RAGLAN HOODIE // UNISEX
55.00

SKRILLEX 'ALIEN SUB' T-SHIRT // UNISEX
24.50

SKRILLEX 'SQUAD' T-SHIRT // UNISEX
27.00

SKRILLEX 'STAGESHOT' T-SHIRT // UNISEX
25.00















const Bottoms = [
    {
        collection: "OWSLA Clasics",
        category: "Bottoms",
        name: "'ALL-OVER LOGO' SWIM SHORTS // UNISEX",
        description: "Consectetur exercitation minim aliquip dolor exercitation culpa pariatur sint. Enim qui veniam velit irure. Minim sint sint ad minim ad aliqua sunt et excepteur. Dolor nulla reprehenderit voluptate excepteur magna sunt incididunt laborum nulla exercitation eiusmod ut eu deserunt. Sunt nisi sint laborum id et eu nostrud dolore. Officia enim mollit duis reprehenderit proident.",
        price: 65.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fbottom_001.webp?alt=media&token=29f47f23-f4ba-410d-9f31-7d7fa52f3180",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fbottom_002.webp?alt=media&token=1860ee17-4b36-40fa-a11d-a297bdd796a2",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Bottoms",
        name: "'EMBROIDERED LOGO' SWIM SHORTS // UNISEX",
        description: "Tempor nulla esse eiusmod ut ex aute nulla duis excepteur. Nostrud est id ad do excepteur. Reprehenderit fugiat id consectetur Lorem reprehenderit tempor veniam consequat. Non commodo laboris reprehenderit do amet fugiat do minim dolor consequat.",
        price: 65.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fbottom_003.webp?alt=media&token=d2e220ac-cba0-411d-9a25-9338562ca16d",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fbottom_004.webp?alt=media&token=3977bfbe-5be5-4d3a-97af-22487649b38a",
        ]
    }
]

const Socks = [
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' WHITE KNEE HIGH SOCKS // UNISEX",
        description: "Enim consectetur qui qui eu occaecat labore in officia nulla labore sint dolor est. In eiusmod aute dolore exercitation culpa. Aliqua nulla exercitation nisi nisi laborum ipsum culpa deserunt in cupidatat incididunt. Incididunt irure pariatur laboris enim reprehenderit dolore. Dolore eiusmod occaecat ipsum commodo laborum dolore voluptate.",
        price: 22.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_001.webp?alt=media&token=3f056792-9fde-45c3-9f1f-73eeb17be042",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_002.webp?alt=media&token=7978ddf2-c6ba-42e0-9b31-6a7ab2274c72"
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' BLACK KNEE HIGH SOCKS // UNISEX",
        description: "Veniam aliqua nisi elit velit qui aute cupidatat pariatur cupidatat tempor velit eiusmod. Ex sit id occaecat id velit nisi culpa. Dolore consectetur fugiat dolor eiusmod adipisicing aute esse nulla aute occaecat. Nulla nostrud consequat ea mollit aliquip eiusmod ad sit aliqua qui consectetur Lorem.",
        price: 22.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_003.webp?alt=media&token=6877afb5-3d52-4d6f-9a74-ae4e87d60378",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_004.webp?alt=media&token=157edfbd-b489-4f5a-a469-6023fc2a2dea"
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' GREEN MUSTARD SOCKS // UNISEX",
        description: "Nostrud reprehenderit dolore esse labore eu Lorem ex id non aliqua cupidatat. Excepteur veniam enim commodo est non excepteur cupidatat nisi reprehenderit veniam quis. Ad dolor excepteur adipisicing id ad non irure proident. Laboris reprehenderit ad proident irure consectetur.",
        price: 20.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_005.webp?alt=media&token=8e4be11a-15e8-4fbd-b581-0629c2812f10",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_006.webp?alt=media&token=649b1837-dec5-4185-84d5-ac1d4e3a76df"
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' WHITE RED BLACK SOCKS // UNISEX",
        description: "Eiusmod eiusmod velit nostrud sit. Qui ut pariatur ipsum pariatur consectetur Lorem esse nulla sit. Ex minim mollit reprehenderit fugiat aliquip consequat. Velit officia ex adipisicing in.",
        price: 20.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_007.webp?alt=media&token=f7ae749e-7514-47c2-9578-7eb08ce7da3d",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_008.webp?alt=media&token=7097c4e2-601d-495e-af87-2092cca59fad",    
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' WHITE GREY BLACK SOCKS // UNISEX",
        description: "Eu magna dolore magna aliquip consequat officia magna deserunt officia veniam. In nostrud eiusmod nostrud commodo. Adipisicing qui Lorem quis est cupidatat commodo laboris officia sunt pariatur commodo ipsum. Laborum occaecat et ullamco pariatur sit. Deserunt do sint ullamco aliquip pariatur qui deserunt esse culpa officia labore velit. Exercitation dolore aliqua exercitation minim cillum do incididunt veniam.",
        price: 20.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_009.webp?alt=media&token=640b5277-69fd-47be-b797-9219ddda51d4",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_010.webp?alt=media&token=697ec9d8-ebbd-4fe2-9f16-315fa4d15d8b",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Socks",
        name: "'OWSLA' BLACK WHITE GREY SOCKS // UNISEX",
        description: "Pariatur minim eu exercitation ex fugiat. Est et laborum excepteur consectetur commodo sint magna eiusmod do amet et minim nisi anim. Officia ex proident excepteur do excepteur dolore in esse occaecat officia fugiat labore ex.",
        price: 20.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_011.webp?alt=media&token=818b0228-7d90-4906-b9d3-4d4d856d840d",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fsock_012.webp?alt=media&token=4a2d538e-1963-442e-8396-e6bf0cc1572e"
        ]
    }
]

const Headwear = [
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "OWSLA LOGO 5-PANEL CAMPER // BLACK,",
        description: "Veniam voluptate officia quis aute adipisicing quis enim laborum ullamco labore veniam pariatur non labore. Cillum excepteur do eiusmod ullamco excepteur eiusmod. Aliquip laboris et ullamco exercitation incididunt sint occaecat aliqua ea est occaecat. Enim esse consequat aliquip culpa. Do consectetur reprehenderit mollit sunt amet ullamco consectetur sint voluptate excepteur consectetur nulla aute aute. Id occaecat anim exercitation commodo excepteur.",
        price: 45.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_001.webp?alt=media&token=cd33bdd4-9393-412b-bf75-d1f3d8e6ff95",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_002.webp?alt=media&token=6ca1738c-2560-43e3-9bd9-a45ca83d3aaf",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "'OWSLA' UNSTRUCTURED HAT // TAN WITH GOLD PIN,",
        description: "Fugiat veniam fugiat do deserunt aute occaecat mollit elit eiusmod nisi. Officia elit tempor consectetur ut reprehenderit ad. Velit non consequat minim duis adipisicing consequat irure. Sit anim ut id enim nulla fugiat ad ea. Sit nisi dolore deserunt veniam adipisicing dolore excepteur ex. Amet minim nulla aute sit fugiat proident elit ut qui tempor pariatur deserunt. Aute excepteur amet ad exercitation laborum aliqua ea.",
        price: 45.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_003.webp?alt=media&token=e541ebd5-cbf3-4744-97e7-a8cf20e9cbb9",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_004.webp?alt=media&token=2b9cd4fb-56c8-4963-a487-a434e7d8972e",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "'OWSLA' UNSTRUCTURED HAT // GREY WITH SILVER PIN,",
        description: "Esse duis dolor ad dolore laborum est quis dolor ipsum et. Eiusmod magna eu tempor pariatur magna commodo adipisicing non magna aute. Duis ut aliquip aliquip nostrud ipsum est aliqua do nulla id cillum commodo cillum. Fugiat officia et officia dolor pariatur ullamco est do veniam commodo velit cupidatat. Commodo pariatur ipsum officia Lorem esse deserunt et nostrud.",
        price: 45.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_005.webp?alt=media&token=8cc99441-7c30-49cd-8354-864808f68cf8",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_006.webp?alt=media&token=87310f5a-45e7-4fe4-bfb6-c6652d0c241a",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "OWSLA BOX LOGO BEANIE // GOLD,",
        description: "Non aute exercitation ex ipsum minim eiusmod. Cillum deserunt non do aliqua eiusmod commodo laboris mollit sit. Consectetur nostrud fugiat veniam dolore non aliquip duis laboris. Nostrud dolore aute pariatur enim culpa cupidatat aliqua sint amet. Qui elit aliqua reprehenderit et sit cillum Lorem adipisicing sit pariatur amet pariatur duis consectetur. Tempor consequat dolor in nisi enim laboris qui occaecat occaecat dolore ut. Ut anim deserunt ex proident laborum anim nostrud culpa sunt ex.",
        price: 25.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_007.webp?alt=media&token=ede0b93c-352c-4ec0-aa8b-3d64e1148178",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_008.webp?alt=media&token=3ecb3abb-0d7d-4160-aa3d-610de8fc7d59",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "'OWSLA LOGO' BEANIE // WHITE & BLACK,",
        description: "Velit duis eu labore ea commodo cupidatat ipsum voluptate. Labore incididunt aliqua proident reprehenderit nulla ut enim. Lorem anim duis commodo sunt tempor ea.",
        price: 25.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_009.webp?alt=media&token=17addc4a-4b74-4319-b490-52c173265a25",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_010.webp?alt=media&token=7a002007-4d32-45fd-92d3-753afbd41343",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "'OWSLA LOGO' BEANIE // GOLD & WHITE LOGO,",
        description: "Ipsum ut veniam mollit in ea occaecat. Et fugiat reprehenderit aliquip mollit aute cupidatat cupidatat. Excepteur eiusmod esse ex est ipsum et in sunt officia mollit eiusmod. Ea enim ullamco do est amet ullamco voluptate exercitation.",
        price: 25.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_011.webp?alt=media&token=a199f1ac-b5b2-4e5c-acdd-b56365dfa2c9",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_012.webp?alt=media&token=faed66c6-161a-4b9c-bf45-3cf991cc2819",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "'COLOR BARS' BEANIE,",
        description: "Id dolore ad enim incididunt consectetur. Labore est esse minim pariatur sit occaecat qui. Duis voluptate enim est ullamco.",
        price: 25.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_013.webp?alt=media&token=d15d19ca-4b29-4999-a960-02865793984f",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_014.webp?alt=media&token=7cd3ab3c-512a-40d6-a2fe-70bcca046124",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "SKRILLEX 'ILL' RED LOGO BEANIE // BLACK,",
        description: "Aliquip quis sit voluptate aliqua. Duis ad non commodo nostrud exercitation reprehenderit officia incididunt nulla. Irure amet voluptate officia esse veniam fugiat occaecat deserunt deserunt occaecat esse labore. Elit pariatur eu est culpa consequat incididunt exercitation eu. Ut adipisicing proident ea nostrud ullamco reprehenderit occaecat officia dolor eiusmod ea cupidatat aliqua. Et veniam Lorem adipisicing pariatur eu aliqua Lorem in consectetur deserunt. Tempor labore consectetur id et est et Lorem ullamco.",
        price: 25.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_015.webp?alt=media&token=214cbf35-686a-4395-8c1b-6c3d244b6c55",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_016.webp?alt=media&token=d24a3c55-6b71-4ad6-bddd-0e031aa16c2d",
        ]
    }
]

const Accessories = [
    {
        collection: "OWSLA Clasics",
        category: "Accessories",
        name: "",
        description: "Nulla enim laborum pariatur ex eiusmod nisi duis velit ut adipisicing pariatur. Laboris exercitation nisi sit qui ad cupidatat deserunt qui elit laborum nisi. Tempor quis ex ut reprehenderit veniam non ullamco consectetur ea laborum in occaecat enim id. Ex voluptate ex nulla laborum fugiat culpa mollit. Aute dolore adipisicing magna veniam. Nulla ad ex est et sunt ex esse.",
        price: 45.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_001.webp?alt=media&token=cd33bdd4-9393-412b-bf75-d1f3d8e6ff95",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_002.webp?alt=media&token=6ca1738c-2560-43e3-9bd9-a45ca83d3aaf",
        ]
    },
]




/*     {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "OWSLA BLACK LOGO CROP TEE - MOCK TWIST",
        description: "Consequat irure mollit nisi sint irure. Veniam quis aute amet veniam sunt Lorem et aliquip sunt Lorem nostrud sunt ullamco. Et velit adipisicing esse voluptate magna excepteur non eu irure excepteur elit. Incididunt sunt duis ipsum officia aute qui nostrud nulla magna. Minim tempor exercitation in fugiat est cillum enim ex nisi magna.",
        price: 32.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_048.webp?alt=media&token=ae1bb26d-9f4c-4889-b9fd-cd10ff67d8fb",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_049.webp?alt=media&token=4dcc4b14-a721-4488-8140-c07928674156",            
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "OWSLA BLACK LOGO CROP LONGSLEEVE - MOCK TWIST",
        description: "Magna ipsum excepteur aliqua adipisicing duis Lorem. Aliqua commodo fugiat id labore ullamco excepteur reprehenderit. Ex voluptate cupidatat anim cillum do fugiat exercitation. Amet excepteur id nisi veniam dolor.",
        price: 36.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_050.webp?alt=media&token=c14f51a4-3509-4765-a859-7d01b4b021bd",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_051.webp?alt=media&token=dcd2d700-9b6e-43cc-a7ba-9cb1da76700d",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Ea deserunt et eu consectetur. Amet incididunt nostrud amet ut ipsum exercitation voluptate tempor Lorem tempor. Irure proident culpa ipsum sunt. Ut velit veniam nulla voluptate ipsum dolor sunt ea nisi fugiat irure irure. Excepteur sunt non et mollit occaecat non anim ut.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_052.webp?alt=media&token=b0ae27c0-b63f-43e1-9be1-c04a9f9c3b97",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_053.webp?alt=media&token=f5038b66-768a-4be9-91cc-6e68bd2b1ae4",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Consequat non est commodo magna esse culpa consequat do ut nostrud nisi tempor. Amet ipsum amet dolore commodo officia pariatur do id cillum proident non sint laborum. Laboris magna eiusmod do aute do anim nulla sint sit mollit ut ex. Reprehenderit aute velit eiusmod irure qui exercitation Lorem dolor quis excepteur.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_054.webp?alt=media&token=8f157b7b-c9fe-44b9-8ba8-3b764973e2e2",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_055.webp?alt=media&token=3bb78747-b595-49c4-a73f-de162030392b",
            
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Elit Lorem et ut cupidatat cupidatat aliqua Lorem velit consectetur excepteur et qui. Deserunt officia nisi adipisicing duis ullamco cillum laborum veniam irure laboris ex incididunt. Esse adipisicing irure veniam nulla esse amet do magna incididunt sunt non ad. Cillum ex deserunt est exercitation minim voluptate dolore esse Lorem culpa commodo incididunt culpa.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_056.webp?alt=media&token=881ffa6d-318d-4ba0-8ed5-20581a89a947",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_057.webp?alt=media&token=c7c97e59-9f94-4be8-8777-f813767e1364",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Consectetur consectetur Lorem veniam labore irure nisi cupidatat et id ea duis occaecat. Culpa deserunt nostrud laborum pariatur do. Sint nisi proident laboris ullamco pariatur dolor voluptate. Adipisicing magna esse elit ullamco incididunt dolore excepteur eu sunt ad veniam.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_058.webp?alt=media&token=1e2596f9-852b-48ff-a404-2f4bb237be09",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_059.webp?alt=media&token=9417d373-50f6-4950-a1f8-e3808e5f37a4",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Occaecat irure aliquip aliquip culpa excepteur voluptate eu sint non. Adipisicing consequat magna reprehenderit adipisicing voluptate laborum reprehenderit fugiat est amet sunt cupidatat. Consectetur voluptate nulla proident deserunt commodo esse sint pariatur amet aliqua tempor consequat consequat nulla. Aute ipsum amet mollit officia officia sit dolore laboris. Amet sint proident sit sit laborum mollit in ea non exercitation id quis. Exercitation Lorem magna voluptate ipsum dolore adipisicing labore anim pariatur deserunt mollit. Esse exercitation nisi aliqua deserunt occaecat excepteur officia excepteur magna enim.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_062.webp?alt=media&token=6bdfec43-1ed0-4336-9b01-a5e747f56add",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_063.webp?alt=media&token=eb8c2075-c18c-4b64-aa82-fb8794401ba3",            
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Commodo consequat culpa magna proident culpa esse in aliqua culpa elit minim irure nostrud. Qui incididunt ad nostrud do elit quis proident incididunt. Exercitation est laborum commodo ullamco dolor proident consequat elit eiusmod. Ut enim labore consequat amet excepteur nostrud ea mollit duis minim exercitation id. Dolore pariatur anim labore Lorem enim ullamco sint consequat et incididunt fugiat esse aliqua excepteur. Consequat incididunt duis ad occaecat eu consectetur pariatur. Ad qui sunt excepteur aliquip incididunt deserunt id fugiat.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_064.webp?alt=media&token=aa054792-33ee-4413-b957-91867a9668aa",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_065.webp?alt=media&token=78007543-b6c7-4e7d-be1f-04775514db81",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Laborum dolore sint consequat non et exercitation aute labore ex tempor elit aute eu et. Quis tempor proident id esse veniam ullamco excepteur sit. Nostrud sunt sunt sunt cupidatat mollit ullamco aute ut reprehenderit. Velit non quis tempor elit pariatur incididunt laborum et veniam occaecat pariatur in dolor officia. Cupidatat sint non consectetur est enim aliqua aliqua culpa minim culpa exercitation. Occaecat anim excepteur cupidatat incididunt nisi proident dolor et. Duis dolor eiusmod dolore anim minim non deserunt esse.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_066.webp?alt=media&token=d05e01b8-e19e-4df3-9c17-73c423c3dc3f",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_067.webp?alt=media&token=b426bd7b-c700-49d3-85d7-8c347c276631",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Magna ad incididunt pariatur nulla ad aute duis id cillum tempor qui. Occaecat tempor do ad nostrud. Eu exercitation deserunt elit occaecat consectetur cillum mollit. Eiusmod adipisicing ipsum amet adipisicing nulla mollit dolore. Ea ad nisi ex dolor eu nulla nulla nostrud dolore labore est. Magna Lorem amet ipsum qui laborum aliqua exercitation cillum in in dolore. Id labore tempor dolor ipsum Lorem adipisicing.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_068.webp?alt=media&token=c076a41f-4420-4e77-9570-32d0dc4c8c9f",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_069.webp?alt=media&token=6075badc-4ee5-42c3-ac16-db3288342eaf",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Amet aliquip amet quis laborum tempor tempor velit cillum ut labore sit do. Culpa veniam officia anim non commodo sint laborum aliquip voluptate id. Aute voluptate est nostrud laboris laboris cupidatat.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_070.webp?alt=media&token=8679c7d6-dea2-4da9-974e-bb18a8c683fe",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_071.webp?alt=media&token=8c43cf3e-6103-4e92-8077-c10db229f841",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Ex anim qui ad cillum laborum sunt incididunt ex do cillum labore eiusmod est. Amet fugiat anim ex minim adipisicing consectetur ex quis nulla voluptate ipsum veniam laboris occaecat. Aute anim duis qui aliqua et consequat. Sit pariatur irure aliquip deserunt aute. Aute fugiat cillum ex in nulla irure esse non sint incididunt. Magna nisi velit cupidatat officia duis et est consectetur consectetur.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_072.webp?alt=media&token=ec85708b-7bdb-40ef-a871-d5801aec865c",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "",
        description: "Nulla aliqua ut nulla eiusmod ullamco. Cillum aliqua in ut minim occaecat consequat commodo. Eu duis ex est do mollit minim id cillum dolor deserunt dolore.",
        price: ,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Ftop_073.webp?alt=media&token=d75046f9-f894-4098-bb7f-a9ec1ec8c03b"
        ]
    },

] */



/*

Headwere,
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "SPECTRUM DAD HAT // BLACK,",
    description: "Velit sit nisi aute irure. Cillum quis excepteur do voluptate ipsum mollit in sunt. Exercitation fugiat in aute in do Lorem. Laboris reprehenderit amet ex voluptate. Amet deserunt nisi ullamco ipsum proident commodo ullamco commodo eu eu id aliqua nulla. Quis deserunt amet incididunt fugiat veniam sunt cillum eu duis.",
    price: 32.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "FLOATY DAD HAT // BLACK,",
    description: "Ad pariatur et dolor proident Lorem cillum occaecat id culpa. Dolore nulla exercitation commodo exercitation tempor quis irure laboris nulla in tempor voluptate id. Enim duis nostrud eiusmod occaecat ullamco velit culpa ut amet officia qui duis aliquip. Laborum aute voluptate exercitation dolore minim velit aute consequat velit eu. Sunt velit laborum ea fugiat id laboris do nostrud ad sunt laboris. Consectetur duis magna ut sint labore aute labore duis amet.",
    price: 32.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "BLOBS ART LOGO DAD HAT // BLACK,",
    description: "Tempor elit sunt velit ad dolor aliquip et reprehenderit aliquip proident labore sunt tempor deserunt. Commodo anim cillum culpa occaecat cupidatat do culpa ea. Quis dolore dolore labore cupidatat ipsum nisi id minim amet incididunt laboris ullamco et adipisicing. Labore magna excepteur quis aliqua dolore magna veniam enim. Sint amet exercitation occaecat ea dolore in aute ex pariatur velit. Irure laboris adipisicing commodo deserunt fugiat.",
    price: 32.00,
    stock: 10
    imgs:[
    "",
    ]
},
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "BLOBS ART LOGO DAD HAT // WHITE,",
        description: "Sunt nisi proident velit Lorem elit enim velit incididunt magna ullamco irure minim commodo. Anim aliqua ad labore incididunt laboris aute tempor id tempor incididunt mollit aute anim exercitation. Ut fugiat ad Lorem ad consequat tempor laboris cillum irure. Cupidatat laborum nostrud ea nostrud nulla eiusmod fugiat mollit aute id cupidatat et veniam. Ea et proident pariatur aliqua minim commodo mollit cillum fugiat quis et minim eiusmod. Dolor nisi eiusmod laborum anim velit.",
        price: 32.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_003.webp?alt=media&token=e541ebd5-cbf3-4744-97e7-a8cf20e9cbb9",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_004.webp?alt=media&token=2b9cd4fb-56c8-4963-a487-a434e7d8972e",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "BLOBS ART SCRIPT DAD HAT // BLUE,",
        description: "Dolore laborum et commodo enim qui culpa excepteur incididunt veniam esse est officia. Lorem laborum nostrud aliqua ea velit quis reprehenderit. Irure anim in consectetur nisi ex enim fugiat ut duis do pariatur. Nostrud fugiat id culpa quis cillum sint nisi voluptate incididunt.",
        price: 32.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_005.webp?alt=media&token=8cc99441-7c30-49cd-8354-864808f68cf8",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_006.webp?alt=media&token=87310f5a-45e7-4fe4-bfb6-c6652d0c241a",
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Headwear",
        name: "BLOBS ART SCRIPT DAD HAT // YELLOW,",
        description: "Deserunt ad dolore do aliquip dolor veniam. Non excepteur commodo voluptate nisi elit voluptate anim eiusmod sint occaecat sint veniam. Excepteur nostrud sunt et id consequat exercitation veniam aute. Pariatur occaecat aliqua voluptate magna voluptate veniam nostrud ut commodo velit. Eiusmod sunt ullamco eiusmod elit fugiat consectetur aliquip officia amet nostrud. Ea Lorem Lorem proident proident dolor duis ea laboris tempor nostrud.",
        price: 32.00,
        stock: 10,
        imgs:[
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_007.webp?alt=media&token=ede0b93c-352c-4ec0-aa8b-3d64e1148178",
            "https://firebasestorage.googleapis.com/v0/b/owslagoods-hq.appspot.com/o/products%2Fheadwear_008.webp?alt=media&token=3ecb3abb-0d7d-4160-aa3d-610de8fc7d59",
        ]
    },





*/





/*

accessorires,
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA LOGO' FLAG // BLACK,",
    description: "Voluptate ex est elit quis Lorem commodo laboris. Cupidatat nulla commodo et eu duis consectetur mollit nulla adipisicing. Occaecat laborum eiusmod quis velit cillum anim veniam. Qui est elit aliqua consequat. Id Lorem quis laborum do voluptate consectetur labore ex elit tempor consectetur.",
    price: 40.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA LOGO' FLAG // WHITE,",
    description: "Eu aliquip occaecat aliquip consequat ad id ipsum est exercitation. Amet eiusmod irure anim fugiat. Non minim ex sunt ex occaecat ea nulla laborum ea consectetur deserunt aliquip deserunt. Lorem fugiat laborum dolore eiusmod laborum voluptate consectetur elit aliquip.",
    price: 40.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' LOGO TOTE BAG // APRICOT,",
    description: "Sunt sunt sint adipisicing sunt. Adipisicing tempor aliqua aliquip ullamco. Reprehenderit reprehenderit esse adipisicing in labore proident cillum nulla. Irure nulla cupidatat deserunt id occaecat esse laborum consectetur enim officia cillum consequat labore tempor.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' LOGO TOTE BAG // RED,",
    description: "Culpa sit id reprehenderit exercitation sunt laboris cupidatat eiusmod esse. Incididunt commodo incididunt proident do elit voluptate magna fugiat sit aliqua Lorem sit occaecat qui. Sunt id id culpa ea dolore eu culpa ex laborum commodo eu eiusmod Lorem. Aliquip laboris aliqua velit ullamco aliqua ullamco dolor aliqua proident. Proident incididunt anim sint dolore pariatur in nulla minim officia cillum. In minim minim enim ea occaecat ex mollit ipsum tempor minim adipisicing.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' LOGO TOTE BAG // SAND,",
    description: "Aliquip laboris consequat dolore nisi fugiat laboris et occaecat enim elit. Consequat cupidatat commodo ea sint amet anim voluptate culpa ad veniam eu ea laborum. Lorem Lorem ut cillum laboris nisi amet ad sunt nisi. Do est quis laboris esse dolor veniam incididunt aliqua eu nulla amet ut minim qui. Fugiat laboris consectetur reprehenderit eiusmod duis ex nisi.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' LOGO TOTE BAG // MUSTARD,",
    description: "Et tempor non quis amet fugiat mollit elit Lorem nostrud velit eu id do. Ut consequat magna eu commodo proident dolore amet cupidatat deserunt occaecat ex reprehenderit. Incididunt exercitation aliquip reprehenderit aliquip deserunt velit amet Lorem Lorem. In ullamco aliqua laborum voluptate irure qui adipisicing deserunt nostrud nulla ex anim. Duis laborum incididunt anim laborum excepteur fugiat incididunt voluptate. Voluptate amet aute eu elit ea enim aliqua tempor enim minim consectetur velit.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' LOGO TOTE BAG // BLUE,",
    description: "Fugiat consequat consequat dolore nostrud elit sunt exercitation aliqua sint do aliqua sit dolor qui. Eiusmod duis elit laborum reprehenderit aliqua aliqua velit quis culpa. Qui consectetur laboris sunt occaecat. Ex nisi mollit nisi irure non culpa laborum reprehenderit elit cupidatat laborum labore est tempor. Eu proident dolore tempor aliquip Lorem aliqua reprehenderit. Aliquip nostrud sit eu cupidatat ut eu sunt eu ad incididunt non. Irure quis officia incididunt ut dolore laboris id quis fugiat magna anim labore id esse.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'FREEWAY' POSTER,",
    description: "Sint aute cupidatat cillum Lorem Lorem culpa est. In eu cupidatat adipisicing et minim mollit quis non quis deserunt enim consequat aliqua. Non magna officia officia proident. Eu deserunt ad amet cupidatat magna sunt ut.",
    price: 25.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "PATCH PACK - LARGE VARSITY PATCH,",
    description: "Lorem in do deserunt mollit commodo ea voluptate laboris tempor esse aliquip duis. Cupidatat cillum mollit elit in cupidatat amet. Consequat fugiat magna enim excepteur dolore aute excepteur amet mollit aliqua ullamco cupidatat cillum. Ipsum sit labore non eiusmod excepteur et. Sint consectetur ea cillum consequat.",
    price: 35.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "PATCH PACK - FLAME LOGO / SPIDER / GPGT / GOLD,",
    description: "Officia enim nostrud nisi dolor tempor commodo aliquip minim amet labore irure id aliquip ad. Ullamco reprehenderit mollit incididunt in ut. Deserunt ea reprehenderit non velit. Velit eiusmod dolore eu quis id. Cupidatat mollit amet incididunt tempor irure ex proident cupidatat. Quis et eu amet quis elit in anim. Eu voluptate enim commodo est nostrud mollit esse consectetur reprehenderit anim Lorem adipisicing.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "PATCH PACK - LARGE WHITE LOGO,",
    description: "In commodo velit elit voluptate veniam magna elit sit. Non Lorem duis ipsum cillum esse nostrud cupidatat cupidatat consequat occaecat in. Id ad culpa mollit ut laborum aliquip laboris minim sunt officia. Proident nostrud labore ipsum occaecat nisi elit. Eu mollit exercitation amet esse elit magna ex. Laboris veniam cupidatat laborum qui ea est nisi veniam esse ad.",
    price: 30.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "PATCH PACK - SKRILLEX,",
    description: "Dolor dolore adipisicing reprehenderit labore. Enim consectetur ea sunt laboris deserunt culpa ex. Ipsum velit cillum labore aliquip aliqua Lorem fugiat. In culpa non incididunt labore non exercitation pariatur laborum laborum duis consectetur enim. Elit veniam excepteur magna quis ut. Deserunt ad quis est ad ullamco aute officia eu in aliqua nostrud reprehenderit. In dolor laboris magna veniam amet velit quis aliqua veniam proident incididunt magna amet incididunt.",
    price: 25.00,
    stock: 10
    imgs:[
    "",
    ]
},
{
    collection: "OWSLA Clasics",
    category: "Tops",
    name: "'OWSLA' RED CANVAS KEYCHAIN,",
    description: "Et dolor culpa ut labore eu. Nostrud esse quis veniam ipsum ad voluptate. Aliquip aliqua duis consequat id minim qui sunt. Irure id ullamco fugiat nisi proident Lorem culpa commodo irure reprehenderit minim aliquip adipisicing. Ipsum tempor cillum ex aliqua sint Lorem. Aliquip aute sit Lorem minim proident consequat id quis magna velit. Fugiat laboris velit tempor pariatur culpa officia exercitation consectetur ex exercitation ullamco.",
    price: 10.00,
    stock: 10
    imgs:[
    "",
    ]
}

*/



/*

Bottoms

*/


/*

Bottoms

*/

/*

Bottoms

*/

/*
 {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "BLOBS ART CREWNECK // BLACK // UNISEX",
        description: "Esse laboris incididunt id laboris sint ex nostrud nisi do velit est eiusmod dolor ad. Ea officia culpa consequat dolor cupidatat adipisicing incididunt sint eu aliquip excepteur dolore est. Aute sunt nostrud nisi laboris voluptate sunt mollit.",
        price: 85.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "BLOBS ART LONG SLEEVE // BLACK // UNISEX",
        description: "Commodo cupidatat pariatur ea commodo consequat voluptate cillum amet mollit anim dolor nostrud. Sint laborum voluptate incididunt qui voluptate reprehenderit ut proident elit tempor excepteur ut. Fugiat proident est occaecat ad velit.",
        price: 45.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'MODAL' LONG SLEEVE SHIRT BURNT // UNISEX",
        description: "Est do elit in magna nulla aute. Cupidatat culpa esse ex Lorem tempor mollit. Do cupidatat ad cillum fugiat dolor exercitation amet aute nulla exercitation.",
        price: 36.40,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'MODAL' LONG SLEEVE SHIRT OLIVE // UNISEX",
        description: "Voluptate adipisicing culpa amet commodo. Deserunt culpa sit esse est laborum sunt laboris eiusmod ullamco. Ad do officia laborum sit. Laboris velit dolore reprehenderit ea aute cillum commodo aliquip ullamco culpa. Magna elit tempor non culpa dolor culpa nostrud eiusmod dolor pariatur consectetur et amet ut. Ea irure laborum reprehenderit irure elit aute culpa occaecat quis duis excepteur do tempor.",
        price: 36.40,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'MODAL' LONG SLEEVE SHIRT BLACK // UNISEX",
        description: "Commodo officia dolore Lorem id ullamco veniam amet ea qui sunt amet. Excepteur velit proident cillum id laboris duis qui minim amet reprehenderit deserunt labore. Eu reprehenderit aliqua veniam incididunt tempor cillum minim. Voluptate veniam proident est ipsum reprehenderit labore laboris nisi ex nostrud occaecat veniam officia velit. Exercitation ea consequat est nisi nostrud aliqua reprehenderit Lorem eu. Reprehenderit enim deserunt cupidatat velit anim ullamco sunt exercitation cupidatat irure aute. Anim et occaecat aliquip labore exercitation anim officia.",
        price: 36.40,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE OWLSA PATCH TEE BUTTER // UNISEX",
        description: "Nostrud est pariatur sit ad amet tempor amet in laborum irure sunt adipisicing. Quis non quis aute ad laborum ut. Minim magna deserunt voluptate laboris labore reprehenderit nulla dolore enim amet incididunt eiusmod. Commodo laborum occaecat velit aute officia aute. Ut esse aute aliqua velit ullamco ullamco mollit Lorem aliquip. Mollit excepteur consectetur est quis ullamco laboris adipisicing aliquip non occaecat adipisicing exercitation veniam. Lorem quis labore consectetur consequat ad ipsum dolor eu nulla labore.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE OWSLA PATCH TEE PINK // UNISEX",
        description: "Esse ex ullamco eiusmod quis laboris adipisicing nostrud. Et occaecat dolore officia quis est dolor mollit aliquip ex sunt aliquip. Nulla voluptate fugiat dolor fugiat incididunt labore labore minim eu ad et. Anim tempor dolore sint voluptate. Quis voluptate occaecat sint laborum ad adipisicing ut. Deserunt ea id cupidatat ullamco laboris sit culpa ipsum ullamco aute pariatur fugiat sit.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE 'BOX LOGO' TEE MOSS // UNISEX",
        description: "Ullamco velit minim nisi laboris minim esse. Mollit aute laboris cillum laborum. Sunt fugiat eiusmod consectetur cupidatat nulla nulla voluptate consequat eiusmod sunt commodo dolor occaecat. Nisi officia aliquip eu sint enim consequat. Amet esse occaecat reprehenderit enim cillum in sunt commodo dolore eu elit magna elit cillum.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE 'BOX LOGO' TEE APRICOT // UNISEX",
        description: "Culpa reprehenderit qui sit pariatur proident aliqua culpa voluptate. Officia commodo aliquip et pariatur commodo. Ipsum Lorem fugiat aute dolore sit.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE 'BOX LOGO' TEE BLUE // UNISEX",
        description: "Qui mollit consectetur quis commodo voluptate. Esse qui in sit laborum duis cupidatat velit ipsum velit mollit. Laboris do cillum dolore labore pariatur nulla. Tempor officia nostrud voluptate consequat dolore magna id dolor tempor ut velit mollit. Fugiat dolore aliqua aliqua nulla nostrud anim dolore ex Lorem labore id tempor laboris. Aute laboris voluptate reprehenderit incididunt eu laboris id ut in occaecat ex proident.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },

    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'MODAL' SHORT SLEEVE SHIRT OLIVE // UNISEX",
        description: "Enim fugiat laboris sint officia eiusmod amet. Commodo reprehenderit velit consectetur nisi officia sint reprehenderit reprehenderit ea laboris. Cupidatat proident enim et do ut aute eu pariatur tempor amet tempor culpa eiusmod voluptate. Veniam dolor ea ullamco ea ad mollit laborum. Consequat aute consequat commodo cillum anim. Sint exercitation fugiat aute eiusmod anim magna labore.",
        price: 33.60,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },

    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'OWSLA LOGO' SCALLOP LONG SLEEVE BLACK // UNISEX",
        description: "Cillum elit proident eu aliquip occaecat voluptate anim mollit ad ipsum culpa. Consectetur dolore ullamco nisi proident amet tempor ex amet dolore proident labore. Sit exercitation exercitation cillum consectetur pariatur proident laborum id nulla qui culpa aliquip reprehenderit.",
        price: 45.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
   
    
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "BLOBS ART T-SHIRT // BLACK // UNISEX",
        description: "Minim magna ipsum ut sint ullamco mollit cillum aute commodo sit aute. Ipsum ad amet esse excepteur proident. Laboris voluptate sit nostrud voluptate id nostrud esse. Magna deserunt proident deserunt veniam reprehenderit esse commodo elit ullamco veniam Lorem reprehenderit.",
        price: 35.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
  
  
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'OWSLA LOGO' RAGLAN HOODIE (COLOR BAR SLEEVE) BLACK // UNISEX",
        description: "Aliquip quis fugiat id laborum ad id do Lorem dolor. Qui elit culpa minim ullamco deserunt esse in sint veniam sunt aute ad. Aliqua ea amet dolor dolor qui dolore minim anim non cupidatat occaecat veniam.",
        price: 56.25,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
   
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE 'BOX LOGO' TEE APRICOT // UNISEX",
        description: "Nulla sint consequat aute non laboris est cupidatat consequat incididunt dolore laborum cupidatat Lorem adipisicing. Aliqua qui labore ea ea in duis esse esse Lorem et esse excepteur et. Id consequat proident laboris consectetur laborum dolor esse veniam eu consectetur pariatur cupidatat fugiat pariatur. Sint culpa ea voluptate mollit in enim pariatur consectetur nulla reprehenderit nostrud nulla commodo deserunt. Laborum incididunt fugiat in sit deserunt officia aliquip.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "GARMENT DYE 'BOX LOGO' TEE BLUE // UNISEX",
        description: "Veniam duis in ea adipisicing ex commodo nulla ea ullamco tempor. Aliqua aliquip anim reprehenderit sunt. Irure labore nostrud incididunt sint eiusmod nostrud.",
        price: 42.00,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },
    {
        collection: "OWSLA Clasics",
        category: "Tops",
        name: "'OWSLA LOGO' FRENCH TERRY T-SHIRT BLACK // UNISEX",
        description: "Ut duis ut eiusmod ullamco eiusmod. Cupidatat velit anim reprehenderit non exercitation enim consectetur quis. Ut laboris et pariatur culpa pariatur officia ipsum mollit sunt cillum aliquip aute aliquip duis.",
        price: 48.75,
        stock: 10,
        imgs:[
            "",
            ""
        ]
    },

*/






