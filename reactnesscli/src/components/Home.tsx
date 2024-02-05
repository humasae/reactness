// src/components/Home.tsx
import React, { useState } from 'react';
import User from '../types/User'
import authService from '../services/authService';

interface HomeProps {
  user: User | null;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  const [message, setMessage] = useState('');
  const handleClick = async () => {
    const hello = await authService.getHelloWithInternalCredentials();
    console.log(hello);
    setMessage(hello);
  };
  // useState returns an array with 2 items, the variable and a function than manages that variable an force the re-render of the DOM
  return (
    <div>
      <section>
        {user ? <h2>Welcome {user.username}!</h2> : <h2>Welcome!</h2>}
      </section>
      <section>
        {user ? <h2>Email {user.email}!</h2> : <h2>Email!</h2>}
      </section>
      <section>
        {user ? <h2>pass {user.password}!</h2> : <h2>password!</h2>}
      </section>
      <br/>
      <div>
        <h1>Llamar a Hello: {message}</h1>
        <button onClick={handleClick}>Llamar a Hello</button>
      </div>
    </div>
  );
};

export default Home;