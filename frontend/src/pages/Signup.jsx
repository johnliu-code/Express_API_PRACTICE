import React, {useState, useEffect} from 'react';
import userService from '../services/userService';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const [newUser, setNewUser] = useState([]);

  const {username, email, password, password2} = formData;
  const [dataValid, setDataValid] = useState(false);
  const navigate = useNavigate();

  const handleData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    if(username !== "" && email !== "" && password !== ""  && password !== ""){
      if(password === password2){
        setNewUser({username, email, password});
        setDataValid(true);
      }
    }
  }

  const registerUser = (user) => {
    userService.register(user)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
     })
  }

  useEffect(() => {
    if(dataValid) {
      registerUser(newUser);
      navigate('/images');
    }
  }, [dataValid])

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Sign-Up new account
          </Header>
          {/* <Form size='large'>
            <Segment stacked>
              <Form.Input name="username" value={username} onChange={onChange} fluid icon='user' iconPosition='left' placeholder='Username' />
              <Form.Input name="email" value={email} onChange={onChange} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                name='password'
                value={password} 
                onChange={onChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Form.Input
                name='password2'
                value={password2} 
                onChange={onChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Repeat Password'
                type='password'
              />

              <Button color='teal' fluid size='large' type='submit' onClick={onSubmit}>
              Sign Up
              </Button>
            </Segment>
          </Form> */}
          <Form size='large' onSubmit={handleSubmit} className="form">
            <Segment stacked>
              <Form.Input type='text' name='username' placeholder='Username' onChange={handleData} value={username} fluid icon='user' iconPosition='left' />
              <Form.Input type="text" name="email" placeholder='Email' onChange={handleData} value={email} fluid icon='user' iconPosition='left' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name="password" 
                onChange={handleData} 
                value={password} 
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
                name= "password2" 
                onChange={handleData} 
                value={password2}
              />
    
              <Button type='submit' color='teal' fluid size='large'>
              Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Have an account? <a href='/login'>Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Signup