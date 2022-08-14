import React, {useState, useEffect } from 'react'
import '../style/views/itemListContainer.css'

// Router
import { Link, useParams } from "react-router-dom";

// Data Base
import {db} from '../firebase/firebase.config'
import {getDocs, collection, query, orderBy, where} from 'firebase/firestore'

// Components
import ItemList from "../components/itemList/itemList.jsx";

const ItemListContainer = ()=>{
    const productsCollection = collection(db,'products');
    const collectionsCollection = getDocs(query(collection(db,'collections')))

    const {categoryName} = useParams();

    const [filter,setFilter] = useState( productsCollection)
    const [products,setProducts] = useState([])
    const [collections,setCollections] = useState([])
    
    console.log(collections)

    useEffect(()=>{

       /*  collectionsCollection.then(result => {
            const data = result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setCollections(data)
        })
        .catch(error => console.log(error)) */

        // if (collections.some(v => categoryName.includes(v))) {
        //     console.log(`Match using "${categoryName}"`);
        // }

        //====================== 
    

        // if (categoryName) {

            
            
        //     let d = getDocs(query(filter, where('collection', '==', categoryName)))
        //     let d2 = getDocs(query(filter, where('category', '==', categoryName)))
        //     console.log("---",d,"_____",d2)
    
        //     d2.then(result => {
        //         const data = result.docs.map(doc => {
        //             return{
        //                 id: doc.id,
        //                 ...doc.data(),
        //             }
        //         })
        //         console.log(data)
        //     })
        // }

        getDocs(categoryName ? query(filter, where('category', '==', categoryName)) : filter )
        .then(result => {
            setProducts(result.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            }))
            //console.log(products)
        })
        .catch(error => console.log(error))


        
    },[categoryName, filter, ])

    


    const getFilter = (collection)=>{
        setFilter(query(productsCollection, where('collection', '==', collection),))
        console.log(filter)

        //getDocs( categoryName ? query(filter, where('category', '==', categoryName), orderBy("price", "desc")) : data)
        

    }
    const removeFilter = ()=>{
        console.log(filter)
        setFilter(productsCollection)

        //getDocs( categoryName ? query(filter, where('category', '==', categoryName), orderBy("price", "desc")) : data)
        

    }


    return(
        <section className="items-list-container">
            
            {/* <div>
                {collections.map( (item) => <button key={item.id} onClick={()=>getFilter(item.name)}>{item.name}</button>)}
                    <button onClick={removeFilter}> X</button>
            </div> */}
            
            <ItemList items={products}/>
            

        </section>
    )
}

export default ItemListContainer