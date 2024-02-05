// src/components/BasicCounter.tsx
import React from 'react';
import { useState } from 'react';

const BasicCounter: React.FC = () => {
  // useState returns an array with 2 items, the variable and a function than manages that variable an force the re-render of the DOM
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello world from use State!');
  const [state, setState] = useState({
    message: 'Hello world from State Property',
    count: 3
  });
  const [messages, setMessages] = useState(['mensaje inicial']);
  const addMessage = () => {
    setMessages([...messages, 'nuevo mensaje']);
  };

  const handleClickObject = () => {
    //this function manages the 'state' object, and message property is lost
    console.log('handle click');
    setState({count: state.count + 1});
  }

  const handleMessage = () => {
    setMessage(`Hello world from use State ${count}!`)
  }
  return (
    <div>

      <div>
        <h1 className="text-3xl font-bold underline">{message}</h1>
        <h1 className="text-3xl font-bold underline">State mensaje: {state.message}</h1>
        <h1 className="text-3xl font-bold underline">State contador: {state.count}</h1>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={handleClickObject}>Incrementar objeto state</button>
        <button onClick={handleMessage}>Modificar Mensaje</button>
        <button onClick={addMessage}>Añade Mensaje</button>
        <ul>
          {messages.map(message => (
            <li>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BasicCounter;