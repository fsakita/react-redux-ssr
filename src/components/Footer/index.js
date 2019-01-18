import React from 'react'
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'

const Footer = () => {
    return (
        <div className='c-footer'>
            <Segment vertical>
                <Container textAlign='center'>
                    <Grid columns='equal'>
                        <Grid.Row columns='equal'>
                            <Grid.Column>
                                <Header as='h4' content='Links' />
                                <List link>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' content='Links' />
                                <List link>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as='h4' content='Links' />
                                <List link>
                                    <List.Item as='a'>Link One</List.Item>
                                    <List.Item as='a'>Link Two</List.Item>
                                    <List.Item as='a'>Link Three</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}

export default Footer