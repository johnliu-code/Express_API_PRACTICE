import React, {useEffect, useState} from 'react';
import { format } from "date-fns"
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function Images({image, myImages, setMyImages}) {
    const navigate = useNavigate();
    const handleAddImage = (img) => {
        if(img){
            setMyImages(img);        
        }
        
    }

    useEffect(() => {
        setMyImages(image);
    }, [])

  return (
    <>
        <Card style={{margin: "20px"}}>
            <Image src={image.urls.regular} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{image.user.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{format(new Date(image.created_at), "dd MMMM yyyy")}</span>
            </Card.Meta>
            <Card.Description>
                <a href={`https://instagram.com/${image.user.instagram_username}`} target="_blank" rel="noreferrer">Instagram</a>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="icon-box">
                    <a href='/images'>
                        <Icon name='user'/>
                        {image.likes} Likes
                    </a> 
                    <Button basic color='blue' onClick={ () => handleAddImage(image)}>
                        <Icon name='add' />
                        Add to MyImages
                    </Button>            
                </div>

            </Card.Content>
        </Card>
    </>
  )
}

export default Images