import React, { useEffect, useState } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const Poytry = ({data, myPoetry, setMyPoetry}) => {
  const navigate = useNavigate();
  const [poeChanged, setPoeChanged] = useState(false);

  const handleAddPoetry = (poe) =>{
    setMyPoetry(poe);
    setPoeChanged(true);
  }

 //Navigate to dashboard after add poetry
  useEffect(() => {
    if(poeChanged){
      navigate('/auth');
    }   
  }, [poeChanged])

  return (
    <div className='poetry_box'>
      { data.map((p, i) => (
      <Card key={i} className="poetry_card">
          <Card.Content header={p.title} />
          <Card.Content description={
              p.lines.map((line, i) => (
                i < 6 ?
                <p key={i}>{line}</p>
                : undefined
              ))
            } />
          <Card.Content extra>
            <Icon name='user' />{p.author}
          </Card.Content>
          <Card.Content extra className='poetry_add_btn'>
            <Button basic color='blue' onClick={() => handleAddPoetry(p)}>
                <Icon name='add' />
                Add to MyPoetry
            </Button>
          </Card.Content>
        </Card>    
      ))}

    </div>
  )
}

export default Poytry