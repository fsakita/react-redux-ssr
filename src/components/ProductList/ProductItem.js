import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProductItem = (props) => {
    const { addToBasket, id, content: { image, price, title}} = props
    const qty = 1
    const tyreInfo = { id, qty, price }
    console.log(tyreInfo)

    return (
        <div>
            <Link to={`/product/${id}`}>
                <h4>{title}</h4>
                <img src={`https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54${image}`} className='tyre' />
            </Link>
            <div className='price'>
                <h2>{`£${price}`}</h2>
            </div>
            <Button fluid primary onClick={addToBasket} data={tyreInfo}>Buy</Button>
        </div>
    )
}

export default ProductItem