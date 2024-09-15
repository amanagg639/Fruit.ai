import React, { useState } from 'react';
import './ChatPage.css';

const fruits = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit' },
  { id: 2, name: 'Banana', description: 'A long yellow fruit' },
  { id: 3, name: 'Orange', description: 'A citrus fruit' },
];

function ChatPage() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chat-page">
      <h2>Chat Page (Fruits List)</h2>
      {selectedFruit ? (
        <div className="selected-fruit">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
          <button onClick={() => setSelectedFruit(null)}>Back</button>
        </div>
      ) : (
        <ul className="fruits-list">
          {fruits.map(fruit => (
            <li key={fruit.id} onClick={() => setSelectedFruit(fruit)}>
              <h4>{fruit.name}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChatPage;