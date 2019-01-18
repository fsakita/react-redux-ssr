import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBasket, removeBasket, resetBasket } from '../../action/basket'
import BasketItem from './BasketItem'
import { fetchProducts } from '../../action/products'
import { Grid, Segment, Container, Table, Button } from 'semantic-ui-react'

const m = ({ basket, products }) => ({ basket, products })

@connect(m, { addBasket, removeBasket, resetBasket, fetchProducts })
class BasketList extends Component {
  constructor(props){
    super(props)

    this.addToBasket = this.addToBasket.bind(this)
    this.removeFromBasket = this.removeFromBasket.bind(this)
    this.clearBasket = this.clearBasket.bind(this)
  }

  addToBasket(e, {data}) {
      this.props.addBasket(data)
  }

  removeFromBasket(e, {data}) {
      this.props.removeBasket(data)
  }

  clearBasket() {
      this.props.resetBasket()
  }

  render() {
    console.log(this.props)
    const { basic, basket: { tyres }, products} = this.props

    const basketItems = () => {
        return tyres.map((item, i) => {
            const tyreInfo = products.products.find((obj => obj.id == item.id))
            return <BasketItem key={`BASKET_ITEM_${i}`} 
                                removeFromBasket={this.removeFromBasket}
                                addToBasket={this.addToBasket}
                                qty={item.qty}
                                basic={basic}
                                {...tyreInfo} />
        })
    }

    const basketTotal = tyres.reduce((total, item) => total += (item.price * item.qty), 0).toFixed(2)

    if(tyres.length < 1) {
      return <p>You have no items in the basket</p>
    }

    return(
      <div className="productList">
        <Grid divided='vertically'>
            <Grid.Row columns={3} className='productList__row'>
                <Container>
                    <Table columns='3'>
                        {!basic &&
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>Brand</Table.HeaderCell>
                                <Table.HeaderCell>Qty</Table.HeaderCell>
                                <Table.HeaderCell>Unit Price</Table.HeaderCell>
                                <Table.HeaderCell>Total Price</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        }
                        <Table.Body>
                            {basketItems()}
                        </Table.Body>
                    </Table>
                </Container>
                <Container>
                    <Segment basic size='big' textAlign='right'>
                        Total: <strong>£{basketTotal}</strong>
                    </Segment>
                </Container>
                {!basic &&
                <Container textAlign='right'>
                        <Button size='large' color='orange' onClick={this.clearBasket}>Clear Basket</Button>
                        <Button primary size='large'>Checkout</Button>
                </Container>
                }
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default BasketList