import React, { useState } from 'react'
import { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'

function Wish() {
  const {wishlist,deletewish}=useContext(MainContext)
  

  



  return (
    <div className='cards'>
        {wishlist.map((x)=><div className='card'>
            <img src={x.img} alt="" />
            <h1>{x.name}</h1>
            <h3>{x.price}</h3>
            <button onClick={()=>deletewish(x)}>delete</button>
           




        </div>)}
        


    </div>
  )
}

export default Wish