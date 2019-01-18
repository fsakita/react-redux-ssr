import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import ProductDescription from '../components/ProductDescription'

const Product = (props) => {
    const { match: { params: { id }}} = props

    return (
        <Segment vertical>
            <Container>
                <ProductDescription id={id} />
            </Container>
        </Segment>
    )
}

export default Product