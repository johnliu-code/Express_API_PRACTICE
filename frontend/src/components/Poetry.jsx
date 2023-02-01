import React from 'react';
import { useEffect } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

const Poytry = ({data, myPoetry, setMyPoetry}) => {
  const handleAddPoetry = (poe) =>{
     if(poe){
      setMyPoetry(poe);
      console.log(myPoetry);
     }
  }



  useEffect(() => {
    setMyPoetry(data[0]);
  }, [])

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