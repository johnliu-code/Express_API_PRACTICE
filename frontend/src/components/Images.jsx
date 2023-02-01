import React from 'react';
import { format } from "date-fns"
import { Card, Icon, Image } from 'semantic-ui-react'

function Images({story}) {
  return (
    <>
        <Card style={{margin: "20px"}}>
            <Image src={story.urls.regular} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{story.user.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{format(new Date(story.created_at), "dd MMMM yyyy")}</span>
            </Card.Meta>
            <Card.Description>
                <a href={`https://instagram.com/${story.user.instagram_username}`} target="_blank" rel="noreferrer">Instagram</a>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a href='/'>
                <Icon name='user' />
                {story.likes} Likes
            </a>
            </Card.Content>
        </Card>
    </>
  )
}

export default Images