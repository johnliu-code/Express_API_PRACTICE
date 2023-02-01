import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';

const AuthPage = ({stories, user, userLoged}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {

  }, [userLoged])

  return (
    <div className='page'>
        <Dashboard data={stories} user={user} />
    </div>
  )
}

export default AuthPage