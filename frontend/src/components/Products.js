import React from 'react'
import { Card } from 'react-bootstrap'

const Products = ({product}) => {
    return (
        <Card className='my-3 pd-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variance='top' />           
            </a>
        </Card>
    )
}

export default Products
