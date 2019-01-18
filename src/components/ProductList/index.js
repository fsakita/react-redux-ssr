import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../action/products'
import { addBasket } from '../../action/basket'
import ProductItem from './ProductItem'
import Loading from '../Loading'
import { Grid, Segment } from 'semantic-ui-react'

const m = ({ products }) => ({ products })

@connect(m, { fetchProducts, addBasket })
export default class ProductList extends Component {
  constructor(props){
    super(props)

    this.addToBasket = this.addToBasket.bind(this)
  }

  static fetching ({ dispatch }) {
    return [dispatch(fetchProducts())]
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  addToBasket(e, {data}) {
    this.props.addBasket(data)
  }

  render() {
    const { products: { isFetching, products } } = this.props;

    const productItems = () => {
        return products.map((item, i) => {
          return <Grid.Column key={i} className='productList__row__column'>
                    <Segment>
                      <ProductItem addToBasket={this.addToBasket} {...item} />
                    </Segment>
                  </Grid.Column>
        })
    }

    if(isFetching) {
      return <Loading />
    }

    return(
      <div className="productList">
        <Grid divided='vertically'>
            <Grid.Row columns={3} className='productList__row'>
                {productItems()}
            </Grid.Row>
        </Grid>
      </div>
    );
  }
};