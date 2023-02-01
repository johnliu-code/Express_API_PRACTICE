import React from 'react';
import { useEffect,useState } from 'react';
import { Table, Input, Image } from 'semantic-ui-react';
import Images from "../components/Images";
import storyService from '../services/storyService';

const AddNewStory = ({userLoged, myImages, myPoetry, setDataUdated, stories, setUserStories}) => {
    const localstorage = JSON.parse(localStorage.getItem("user"));
    const [id, setId] = useState('');
    const [hasNewData, setHasNewData] = useState(false);

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

       {myImages ? (
           <p>{myImages.alt_description}</p>
       ): undefined}

       <br></br>
       {myPoetry ? (
            <p>{myPoetry.title}</p>
       ): undefined}

        <button className="ui button" onClick={handleAdd} style={{margin: "20px 0"}}>Add new story</button>

        {/* <Table sortable celled fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Alt</Table.HeaderCell>                  
                    <Table.HeaderCell>ImgUrl</Table.HeaderCell>
                    <Table.HeaderCell>Img</Table.HeaderCell>
                    <Table.HeaderCell>Instagram</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell>Add to Story</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { myImages ? myImages.toArray().map(({alt_description, imgurl, instagram }, i) => (
                <Table.Row key={i}>
                    <Table.Cell>{alt_description}</Table.Cell>
                    <Table.Cell>{imgurl}</Table.Cell>
                    <Table.Cell><Image src={imgurl} wrapped ui={false}  size='mini' /></Table.Cell>
                    <Table.Cell>{instagram}</Table.Cell>
                    <Table.Cell>{imgurl}</Table.Cell>
                    <Table.Cell className='updatebtn'>✓</Table.Cell>
                    <Table.Cell className='deletebtn'>x</Table.Cell>
                    <Table.Cell className='deletebtn'>+</Table.Cell>
                </Table.Row>
                )) : undefined }
            </Table.Body>
        </Table> */}
        {/* </div> */}
    </div>
  )
}

export default AddNewStory