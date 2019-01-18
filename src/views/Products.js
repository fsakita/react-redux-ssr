import React from 'react'
import { Segment, Container, Grid } from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import { Helmet } from 'react-helmet'

const Products = () => {
    return (
        <div>
            <Helmet>
                <title>Products - Tyres on the Drive</title>
                <body class="products_test" />
            </Helmet>
            <Segment vertical>
                <Container>
                    <h2>Products</h2>
                    <ProductList />
                </Container>
            </Segment>
        </div>
    )
}

export default Products