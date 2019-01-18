import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import BasketList from '../components/Basket/BasketList'

const Basket = () => {
    return (
        <div className='v-basket'>
            <Segment vertical>
                <Container>
                    <h2>Basket</h2>
                    <BasketList />
                </Container>
            </Segment>
        </div>
    )
}

export default Basket