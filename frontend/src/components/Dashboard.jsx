import React, {useState} from 'react';
import { useEffect } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import storyService from '../services/storyService';

const Dashboard = ({data, setWillUpdateData , setWillDoUpdate, user, setUserStories}) => {
  const localstorage = JSON.parse(localStorage.getItem("user"));
  const [deletedId, setDeletedId] = useState('');
  const [dataDeleted, setDataDeleted] = useState(false);

  const deleteUserStory = (storyId, userToken) => {
    storyService.deleteStory(storyId, userToken)
    .then(response => {
      console.log(response);
      setDataDeleted(true);
    })
    .catch(err => {
       console.log(err);
    })
  }

  const handleDelete = (storyId, userToken) => {
      setDeletedId(storyId);
      deleteUserStory(storyId, userToken);
  }

  const handleUpdate = (story) => {
    setWillDoUpdate(true);
    setWillUpdateData (story);
}

  useEffect(() => {
    if(dataDeleted){
      setUserStories(data.filter(d => (d._id !== deletedId)));   
    }

  }, [dataDeleted])

  return (
    <div className='data_list'>
      <h1>Welcome {user}! Your stories here... </h1>
      <Table sortable celled fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Autor</Table.HeaderCell>
                    <Table.HeaderCell>Instagram</Table.HeaderCell>
                    <Table.HeaderCell>ImgUrl</Table.HeaderCell>
                    <Table.HeaderCell>Content</Table.HeaderCell>
                    <Table.HeaderCell>userID</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((story, i) => (
                <Table.Row key={i}>
                    <Table.Cell>{story.title}</Table.Cell>
                    <Table.Cell>{story.author}</Table.Cell>
                    <Table.Cell>{story.instagram}</Table.Cell>
                    <Table.Cell>{story.imgurl}</Table.Cell>
                    <Table.Cell>{story.content[0]}</Table.Cell>
                    <Table.Cell>{story.user}</Table.Cell>
                    <Table.Cell className='updatebtn'>
                      <Button icon onClick={() => handleUpdate(story)}>
                        <Icon name='refresh' color='green' />
                      </Button>
                    </Table.Cell>
                    <Table.Cell  className='deletebtn'>
                      <Button icon onClick={() => handleDelete (story._id, localstorage.token)}>
                        <Icon name='trash' color='red' />
                      </Button>
                    </Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>
  )
}

export default Dashboard