// src/components/Home.tsx
import React from 'react';
import UserResponse from '../types/UserResponse'

interface HomeProps {
  user: UserResponse | null;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <section>
        {user ? <h2>Welcome {user.username}!</h2> : <h2>Welcome!</h2>}
      </section>
    </div>
  );
};

export default Home;