// src/pages/auth/LoginPage.tsx
import React from 'react';
import LoginObject from '../../components/LoginObject';
import User from '../../types/User';

const AuthLoginObject: React.FC = () => {
  const handleLogin = (user: User) => {
    // Lógica de autenticación específica de esta página
  };

  return (
    <div>
      <h2>Authentication - Login - MEDIANT INTERFAZ!!!</h2>
      <LoginObject onLogin={handleLogin} />
    </div>
  );
};

export default AuthLoginObject;