import React from 'react'
import BasketList from './BasketList'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const BasketPopUp = () => {
    return <div className='popupBasket'>
        <BasketList basic />
        <Link to='/basket'>
            <Button fluid primary>Basket</Button>
        </Link>
    </div>
}

export default BasketPopUp