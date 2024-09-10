import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {products} from '../data/index'


const ProductDescription = () => {

    const params = useParams()

    console.log('params', params)
    
    const productObject = products.find((el)=> el.id == params.id)

  return (
    <div>
        <h1> Product Description </h1>

        <h1> {productObject.name} </h1>    
        <h1> {productObject.description} </h1>
        <h1> {productObject.price} </h1>

        <Link to='/products'> Go back </Link>    
    </div>
  )
}

export default ProductDescription