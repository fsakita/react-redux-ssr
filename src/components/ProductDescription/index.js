import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../action/products'
import { addBasket } from '../../action/basket'
import Loading from '../Loading'
import { Grid, Segment, Container, Button } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

const m = ({ products }) => ({ products })

@connect(m, { fetchProducts, addBasket })
export default class ProductDescription extends Component {
  constructor(props){
    super(props)

    this.addToBasket = this.addToBasket.bind(this)
  }

  static fetching ({ dispatch }) {
    return [dispatch(fetchProducts())];
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  addToBasket(e, {data}) {
    this.props.addBasket(data)
  }

  render() {
    const { id, products: { isFetching, products } } = this.props
    let tyre, tyreInfo = ''

    if(products) {
        tyre = products.find(obj => obj.id == id).content
        tyreInfo = {
            id: this.props.id,
            qty: 1,
            price: tyre.price
        }
    }

    if(isFetching || !tyre) {
      return <Loading />
    }

    return(
      <div className="productList">
        <Helmet>
            <title>{tyre.descriptions[1].description} - Tyres on the Drive</title>
            <meta name="description" content={tyre.descriptions[1].description} />
        </Helmet>
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Container>
                        <h2>{tyre.title}</h2>
                        <img src={`https://cdn.tyresonthedrive.com/assets/08-01-2019--09-54${tyre.image}`} />
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <div>
                            <h3>{tyre.descriptions[1].description}</h3>
                            <div dangerouslySetInnerHTML={{__html: tyre.descriptions[4].description}} />
                        </div>
                    </Segment>
                    <Container textAlign='right'>
                        <h3>£{tyre.price}</h3>
                        <Button primary data={tyreInfo} onClick={this.addToBasket}>Add to Basket</Button>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
};