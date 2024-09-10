import React from 'react'
import { Link } from 'react-router-dom'
import {products} from '../data/index'

const Products = () => {
  return (
    <div>
        {
            products.map((el,i)=>(
                
                <div key={i}>
                    <hr></hr>
                    <h1> {el.name} </h1>
                    <h3> {el.price} </h3>
                    <Link to={`/products/${el.id}`}> Show more details... </Link>
                    <hr></hr>
                </div>
            ))
        }
    </div>
  )
}

export default Products