import React from 'react';
import './summerwear.css';
import Summer1 from '../../Assets/Images/Summer1.jpg';
import Summer2 from '../../Assets/Images/Summer2.jpg';
import Summer3 from '../../Assets/Images/Summer3.jpg';
import Summer4 from '../../Assets/Images/Summer4.jpg';

const Summerwear = () => {
  const cards = [
    { id: 1, imageUrl: Summer1 , title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 2, imageUrl: Summer2, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 3, imageUrl: Summer3, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 4, imageUrl: Summer4, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 1, imageUrl: Summer1, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 2, imageUrl: Summer2, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 3, imageUrl: Summer3, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
    { id: 4, imageUrl: Summer4, title: 'T-Shirt', description: 'For cool Personolity', price:'$ 599'},
  ];

  return (
     <div className="summerwear-container">
      {cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.imageUrl} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <p>{card.price}</p>
        </div>
      ))}
     </div>
  );
};

export default Summerwear;
