import React from 'react'
import Card from './Card'

  const List = ({ cards }) => (
    <div>
      <ul>
       { cards.map( card => <Card key={card.id} 
            id={card.id} 
            subject={card.subject}
            question={card.question}
            answer={card.answer}
            / > 
         )
         } 
      </ul>
    </div>
    )

export default List