import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import MainProvider, { MainContext } from '../../context/MainProvider'
import "./Admin.scss"
function Admin() {
    const [products, setproducts] = useState([])
    
    const {addwish}=useContext(MainContext)
    useEffect(() => {
    fetch("http://localhost:3000/user")
    .then(res=>res.json())
    .then(data=>setproducts(data))
    }, [])





    
    
  return (
    <div className='cards'>
        {products.map((x)=><div className='card'>
            <img src={x.img} alt="" />
            <h1>{x.name}</h1>
            <h3>{x.price}</h3>
            <button onClick={()=>addwish(x)}><i className="fa-solid fa-heart"></i></button>



        </div>)}
        


    </div>
  )
}

export default Admin