import React from 'react';
import { useEffect,useState } from 'react';
import { Icon, Button, Label } from 'semantic-ui-react';
import storyService from '../services/storyService';
import { Link, useNavigate } from 'react-router-dom';

const AddNewStory = ({userLoged, myImages, myPoetry, setDataUdated, stories, setUserStories}) => {
    const localstorage = JSON.parse(localStorage.getItem("user"));
    const [id, setId] = useState('');
    const [hasNewData, setHasNewData] = useState(false);
    const [dataAdded, setDataAdded] = useState(false);

    const [newstory, setNewstory] = useState({
        user: "", 
        title: "", 
        author: "", 
        imgurl: "", 
        content: [], 
        instagram: "" 
    });

    const handleAdd = () => {
        if(myImages && myPoetry){
            setNewstory({
                user: id, 
                title: myPoetry.title, 
                author: myPoetry.author, 
                imgurl: myImages.urls.regular, 
                content: myPoetry.lines, 
                instagram: `https://instagram.com/${myImages.user.instagram_username}`
            })

            setHasNewData(true);
        }    
    }

    const addUserStory = (story, userToken) => {
        storyService.createStory(story, userToken)
        .then(response => {
          console.log(response);
          setDataAdded(true);
        })
        .catch(err => {
           console.log(err);
        })
    }

    useEffect(() => {
        if(userLoged){
            setId (localstorage._id);
        }

        if(hasNewData){
            addUserStory(newstory, localstorage.token);
            setDataUdated(true);

            setUserStories([...stories, newstory])
        }
       
    },[userLoged, hasNewData])

  return (
    <div>
        <h1>Add you new story with collected images and poetry....</h1>

        <div className='add_data_box'>
            <div className='search_line'>
                <div>
                    <Link to="/images">
                        <Button as='div' labelPosition='right'>
                        <Button color='teal'>
                            <Icon name='image' />
                            Serach 
                        </Button>
                        <Label basic color='teal' pointing='left'>
                            images
                        </Label>
                        </Button>                         
                    </Link>              
                </div> 
                {myImages ? (
                    <h5>Image alt: { !dataAdded ? myImages.alt_description : undefined } <span className='data_noties'> {dataAdded ? 'Data added...' : (myImages.alt_description ? 'Find one image...' : undefined)} </span></h5>
                ): undefined}               
            </div>

            <div className='search_line'>
                <div>
                    <Link to="/poetry">
                        <Button as='div' labelPosition='right'>
                        <Button basic color='blue'>
                            <Icon name='music' />
                            Search
                        </Button>
                        <Label basic color='blue' pointing='left'>
                            Poetry
                        </Label>
                        </Button>                          
                    </Link>
              
                </div>  
                {myPoetry ? (
                        <h5>Poetry title: { !dataAdded ? myPoetry.title : undefined } <span className='data_noties'> {dataAdded ? 'Data added...' : (myPoetry.title ? 'Find one poetry...' : undefined)} </span></h5>
                ): undefined}                             
            </div>

        </div>
        <Button color='teal' className="ui button add_data_btn" onClick={handleAdd}>Add New Story</Button>
    </div>
  )
}

export default AddNewStory