import React, {useState, useEffect} from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import storyService from '../services/storyService';

const UpdateForm = ({willUpdateData}) => {
    const localstorage = JSON.parse(localStorage.getItem("user"));
    const [formdata, setFormData] = useState({
        title: '',
        content: [],
        startIndex: '',
        endIndex: ''
    });
    const {title, content, startIndex, endIndex} = formdata;
    const [newData, setNewData] = useState({});
    let newContent = [];

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const updateUserStory = (storyId, newData, userToken) => {
        storyService.updateStory(storyId, newData, userToken)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
           console.log(err);
        })        
    }

    const handleUpdate = () => {
        if( Number(startIndex) < Number(endIndex) && Number(endIndex) <= content.length){
            newContent = content.slice(Number(startIndex), Number(endIndex));
        }

        setNewData({
            _id: newData._id,
            title,
            author: newData.author,
            imgurl: newData.imgurl,
            content: newContent,
            user: newData.user
        })
        
        updateUserStory(newData._id, newData, localstorage.token);
    }

    useEffect(() => {
        if(willUpdateData){
            setFormData({
                title: willUpdateData.title, 
                content:willUpdateData.content
            });  
            
            setNewData(willUpdateData);
        }
    }, [])

  return (
    <div>
       <Form>
          <Form.Field  control={Input} fluid label='Title' name="title" placeholder='Title' value={formdata.title} onChange={onChange} />
          { formdata.content? formdata.content.map((line, i) => (
            <p key={i}> Line {i} : {line} </p>
          )): undefined}
          <h5>Choose to keep start line and end line: (Suggest total 4-6) </h5>
          <Form.Group widths='equal'>
            <Form.Field
                control={Input}
                label='Start line number'
                placeholder='1'
                name="startIndex"
                value={startIndex}
                onChange={onChange}
            />
            <Form.Field
                control={Input}
                label='End line number'
                placeholder='6'
                name="endIndex"
                value={endIndex}
                onChange={onChange}
          />
        </Form.Group>
          <Button.Group>
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive onClick={() => handleUpdate()}>Update</Button>
        </Button.Group>
      </Form>
    </div>
  )
}

export default UpdateForm