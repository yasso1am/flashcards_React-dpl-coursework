import React from 'react';
  const Card = ({ id, subject, question, answer}) => (
    <li id={id}>
      <h2>{subject}</h2>
      <p>{question}</p>
      <h4>{answer}</h4>
    </li>
  )
export default Card