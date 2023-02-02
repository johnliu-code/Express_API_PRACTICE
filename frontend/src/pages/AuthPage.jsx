import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import AddNewStory from '../components/addNewStory';
import UpdateForm from '../components/UpdateForm';

const AuthPage = ({stories, setUserStories, user, userLoged, myImages, myPoetry}) => {
  const [willUpdateData, setWillUpdateData] = useState({});
  const [updateDataId, setUpdateDataId] = useState('');
  const [willDoUpdate, setWillDoUpdate] = useState(false);
  const [dataUdated, setDataUdated] = useState(false);

  console.log(willUpdateData);

  useEffect(() => {
    //  if(userLoged || dataUdated){
    //   window.location.reload(false);
    //  }
  }, [userLoged, dataUdated])

  return (
    <div className='page'>
        <AddNewStory stories={stories} userLoged={userLoged} user={user} myImages={myImages} myPoetry={myPoetry} setDataUdated={setDataUdated} setUserStories={setUserStories} />
        { willDoUpdate ? 
          <UpdateForm willUpdateData={willUpdateData} />
        : undefined}     
        <Dashboard data={stories} user={user} setUserStories={setUserStories} setWillDoUpdate={setWillDoUpdate} setWillUpdateData={setWillUpdateData} />
    </div>
  )
}

export default AuthPage