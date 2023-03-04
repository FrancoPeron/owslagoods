import React, { useState, useEffect } from 'react'

// Data Base
import { db } from '@/database/firebase.config'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

import { AllProd, Bottoms, Headwear, Socks, Tops, Accessories, Artists } from "@/assets/data";

// import ToolBar from './components/toolBar.jsx'
// <ToolBar  />

const ToolBar = () => {

  useEffect(() => {
    console.log("tool")
  }, [])

  /*=============================================================*/

  //Saber urls de Datos

  const getUrl = () => {
    const storage = getStorage();

    let productsRef = ref(storage, 'products');

    let topsRef = ref(productsRef, 'tops');
    let bottomsRef = ref(productsRef, 'bottoms');
    let headwearRef = ref(productsRef, 'headwear');
    let socksRef = ref(productsRef, 'socks');
    let accessoriesRef = ref(productsRef, 'accessories');

    let artistsRef = ref(productsRef, 'artists');
    let lukeviciousXOwslaRef = ref(productsRef, 'lukevicious-x-owsla');
    let burnForeverRef = ref(productsRef, 'burn-forever');
    let audioDestructRef = ref(productsRef, 'audio-destruct');

    listAll(artistsRef)
      .then(async ({ items }) => {
        const urls = await Promise.all(items.map((item) => getDownloadURL(item)));
        // console.log(urls);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getUrl()

  /*=============================================================*/

  //Cargar Datos
  const addDocw = () => {
    console.log(AllProd)
    AllProd.map((item) => {
      addDoc(collection(db, 'products'), {
        ...item,
        date: serverTimestamp(),
      })

    })
  }

  return (
    <section>
      <button onClick={addDocw}> - add - </button>
    </section>
  )

}

export default ToolBar;





