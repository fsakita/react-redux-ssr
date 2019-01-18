import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

const BasketItem = (props) => {
    const { basic, addToBasket, removeFromBasket, content:{ title, image, price}, qty, id } = props
    const tyreInfo = { id, qty, price }
    const totalPrice = (price * qty).toFixed(2)

    return (
        <Table.Row>
            <Table.Cell>
                <img src={`https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54${image}`} width='70px' />
            </Table.Cell>
            <Table.Cell>
                {title}
            </Table.Cell>
            <Table.Cell>
                {qty}
            </Table.Cell>
            {!basic &&
                <Table.Cell>
                    {price}
                </Table.Cell>
            }
            <Table.Cell>
                {totalPrice}
            </Table.Cell>
            <Table.Cell singleLine>
                <div>
                    <Button icon data={tyreInfo} onClick={addToBasket}>
                        <Icon name='plus' />
                    </Button>
                    <Button icon data={tyreInfo} onClick={removeFromBasket}>
                        <Icon name='minus' />
                    </Button>
                </div>
            </Table.Cell>
        </Table.Row>
    )
}

export default BasketItem