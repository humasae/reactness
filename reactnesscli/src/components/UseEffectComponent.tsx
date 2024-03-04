// src/components/UseEffectComponent.tsx
import React from 'react';
import { useEffect, useState } from 'react';

const UseEffectComponent: React.FC = () => {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  // UseEffect se ejecuta justo después del momento en que se renderiza el componente en el navegador
  useEffect(() => {
    console.log('After render')

  });
  useEffect(() => {
    console.log('¡¡After After render!!')

  });
  console.log('Before render')
  

  return (
    <div>
      <h2>useEffect examples</h2>
      <p>{message}</p>
      <input type='text' name='' id='' onChange={(event) => {
        setMessage(event.target.value);
      }}/>
      <p>{count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectComponent;