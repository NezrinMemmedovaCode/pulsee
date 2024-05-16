import React, { useState } from 'react'
import { createContext } from 'react'

export const MainContext=createContext()


function MainProvider({children}) {
const [wishlist, setwishlist] = useState([])

function addwish(item) {
    setwishlist([...wishlist,item])
}

function deletewish(item) {
  setwishlist([...wishlist.filter((x)=>x._id!==item._id)])

  
}

  return (
   <MainContext.Provider value={{addwish,wishlist,deletewish}}>

{children}

   </MainContext.Provider>
  )
}

export default MainProvider