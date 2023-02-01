import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import AddNewStory from '../components/addNewStory';

const AuthPage = ({stories, setUserStories, user, userLoged, myImages, myPoetry}) => {
  const [dataUdated, setDataUdated] = useState(false);

  useEffect(() => {
    //  if(userLoged || dataUdated){
    //   window.location.reload(false);
    //  }
  }, [userLoged, dataUdated])

  return (
    <div className='page'>
        <AddNewStory stories={stories} userLoged={userLoged} user={user} myImages={myImages} myPoetry={myPoetry} setDataUdated={setDataUdated} setUserStories={setUserStories} />
        <Dashboard data={stories} user={user} setUserStories={setUserStories} />
    </div>
  )
}

export default AuthPage