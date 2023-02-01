import React from 'react';
import { Card } from 'semantic-ui-react';

const Poytry = ({data}) => {
  return (
    <div className='poetry_box'>
      { data.map((p, i) => (
        <Card
          key={i}
          className="poetry_card"
          link
          header={p.title}
          meta={p.author}
          description={
            p.lines.map((line, i) => (
              i < 6 ?
              <p key={i}>{line}</p>
              : undefined
            ))
          }
        />
      ))}
    </div>
  )
}

export default Poytry