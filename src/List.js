import React from 'react'

  const List = ({ cards }) => (
    <div>
      <ul>
       { cards.map(card => <li key={card.subject}> 
          <h2> {card.subject} </h2> 
          <p> {card.question} </p> 
          <h4> {card.answer} </h4>
          <hr />
        </li>)} 
      </ul>
    </div>
    )

export default List