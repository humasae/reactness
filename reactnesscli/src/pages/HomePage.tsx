// src/pages/HomePage.tsx
import React, { useState } from 'react';
import Home from '../components/Home';
import UserResponse from '../types/UserResponse'



const HomePage: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);

  return (
    <div>
      <h2>Home Page</h2>
      <Home user={user} />
    </div>
  );
};

export default HomePage;