import React, { useState, useEffect } from 'react';

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
      setMessage("Can't go below 0!");
    } else if (count > 5) {
      setMessage("You passed 5!");
    } else {
      setMessage('');
    }
  }, [count]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Not Home Page</h1>
      <h2>Counter: {count}</h2>
      {message && <p>{message}</p>}
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default NotHome;