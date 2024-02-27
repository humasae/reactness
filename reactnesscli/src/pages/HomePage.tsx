// src/pages/HomePage.tsx
import React from 'react';
import Home from '../components/Home';
import { useLocation } from "react-router-dom";



const HomePage: React.FC = () => {
  const location = useLocation();
  const userReceived = location.state.user;

  console.log('hola HomePage.tsx!!')
  console.log(userReceived)

  return (
    <div>
      <h2>Home Page uoooola</h2>
      <Home user={userReceived} />
    </div>
  );
};

export default HomePage;