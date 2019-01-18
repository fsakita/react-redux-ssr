import React from 'react'
import { Menu, Container, Button, Popup, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import BasketPopUp from '../Basket/BasketPopUp'
import BasketIcon from '../Basket/BasketIcon'

const logo = "../../img/logo.svg"

const Header = () => {

    return (
        <div className='menu'>
            <Menu>
                <Container>
                    <Menu.Item>
                        <img className='logo' src={logo} />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/products">Products</Link>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Popup
                                trigger={<div><BasketIcon /></div>}
                                content={<BasketPopUp />}
                                on='click'
                                position='bottom right'
                            />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default Header