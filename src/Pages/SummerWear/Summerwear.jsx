import React from 'react';
import './summerwear.css';

const Summerwear = () => {
  const cards = [
    { id: 1, imageUrl: '', title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 2, imageUrl: '', title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 3, imageUrl: '', title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 4, imageUrl: '', title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
  ];

  return (
    <div>
    <div className="Filetr">Filter </div>
     <div className="summerwear-container">
      {cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.imageUrl} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>{card.price}</p>
        </div>
      ))}
     </div>
    </div>
   
  );
};

export default Summerwear;
