import React from 'react';
import Story from '../components/Story';

const StoriesPage = ({data, user}) => {
  return (
    <div className='page'>
      <h1>Stories of {user} ...</h1>
      <Story stories={data}  user={user} />
    </div>
  )
}

export default StoriesPage