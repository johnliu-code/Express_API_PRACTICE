import React,{ useState, useEffect } from 'react';
import userService from '../services/userService';
import storyService from '../services/storyService';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setCurrentUser, setUserLoged, setUserStories }) => {
  const [loginUser, setLoginUser] = useState({});
  const [authed, setAuthed] = useState(false);
  const [hasuserData, setHasuserData] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const localstorage = JSON.parse(localStorage.getItem("user"));

  const [formdata, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password } = formdata;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    setLoginUser(userData);
    // setHasuserData(true);
    handleLogin(loginUser);
  }

  const handleLogin = (user) => {
    userService.login(user)
      .then(response => {
        console.log(response);
        setAuthed(true);
      })
      .catch(err => {
        console.log(err);
     })
  }

  const getStoriesData = (userToken) => {
    storyService.getStories(userToken)
     .then(response => {
       setUserStories(response);
     })
     .catch(err => {
        console.log(err);
     })
  }

  useEffect(() => {
    if(localstorage){
      handleLogin(loginUser);
    }

    if(authed) {
      if(localstorage){
        setCurrentUser({})
        getStoriesData(localstorage.token);
        setCurrentUser(localstorage.username); 
        setUserLoged(true); 
        setIsLogin(true);  
      }
    }

    if(isLogin){
      navigate('/auth');
    }

  },  [hasuserData, authed, isLogin])

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' name="email" iconPosition='left' placeholder='E-mail address' value={email} onChange={onChange} />
              <Form.Input
                fluid
                name="password"
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={password}
                onChange={onChange}
              />

              <Button color='teal' fluid size='large' type='submit' onClick={onSubmit}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Login