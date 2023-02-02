import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Image, Menu } from 'semantic-ui-react';
import userService from '../services/userService';

const PageHeader = ({user, setUserLoged}) => {
  const localstorage = JSON.parse(localStorage.getItem("user"));
  const onLogout = () => {
    userService.logout()
       .then(response => {
         console.log(response);
         setUserLoged(false);
       })
       .catch(err => {
        console.log(err);
     })
  }
  return (
            <div>
              <Menu fixed='top' inverted>
                <Container>
                <Link to='/' className='item logo'>
                  <Image size='mini' src='storytelling.png' style={{ marginRight: '2em' }} />
                  Photo Stories Blog               
                </Link>
                <Link to='/' className='item'>Home</Link>
                <Link to='/images' className='item'>Images</Link>
                <Link to='/poetry' className='item'>Poetry</Link>
                <Link to='/stories' className='item'>Stories</Link>

                  <Menu.Menu position='right'>
                    { localstorage ? 
                    (
                      <>
                        <Link to='/auth' className='item'>Dashboard</Link>
                        <Link to='/login' className='item' onClick={onLogout}>Logout</Link>                       
                      </>
   
                    ) : 
                    (
                      <>
                        <Link to='/login' className='item'>Login</Link>
                        <Link to='/signup' className='item'>SignUp</Link>                       
                      </>
                    ) }
   
                  </Menu.Menu>
                </Container>
              </Menu>
            </div>
  )
}

export default PageHeader