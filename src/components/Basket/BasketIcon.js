import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Label } from 'semantic-ui-react'

const m = ({ basket }) => ({ basket })

@connect(m)
class BasketIcon extends Component {

  render() {
    const { basket: { tyres }} = this.props
    let basketQty = tyres.reduce((total, item) => total += item.qty, 0)

    return(
        <Icon.Group size='big'>
            <Icon name='shopping basket' />
            {tyres && tyres.length > 0 &&
                <Label color='red' floating size='small'>
                    {basketQty}
                </Label>
            }
        </Icon.Group>
    )
  }
}

export default BasketIcon