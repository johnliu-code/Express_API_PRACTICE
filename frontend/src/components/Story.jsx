import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const Story = ({stories, user}) => {
  return (
    <div className='story_box'>
       {stories? stories.map((story, i) => (
          <Card className='story_card' style={{margin: "20px"}} key={i}>
            <Image src={story.imgurl} wrapped ui={false} />
            <Card.Content>
            <Card.Header className='story_title'>Title: {story.title}</Card.Header>
            <Card.Meta>
                <span className='date'>Author: {story.author}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>Create by: {user}</span>
            </Card.Meta>
            <Card.Description>
                <a href={story.instagram} target="_blank" rel="noreferrer">Image : Instagram</a>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {story.content ? story.content.map((line, i) => (
                i < 6 ?
                    <p key={i}>{line}</p>
                : undefined
                )) : undefined}
            </Card.Content>
        </Card>
       )) : undefined}
    </div>
  )
}

export default Story