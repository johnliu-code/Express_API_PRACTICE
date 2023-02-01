import React from 'react';
import {
    Container,
    List,
    Segment,
  } from 'semantic-ui-react'

const PageFooter = () => {
  return (
    <div>
        <Segment inverted vertical style={{ padding: '2em 0em' }}>
        <Container textAlign='center'>
            <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
                Site Map
            </List.Item>
            <List.Item as='a' href='#'>
                Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
                Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
                Privacy Policy
            </List.Item>
            </List>
        </Container>
        </Segment>
    </div>
  )
}

export default PageFooter