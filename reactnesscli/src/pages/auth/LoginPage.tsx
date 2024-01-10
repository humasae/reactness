// src/pages/auth/LoginPage.tsx
import React from 'react';
import Login from '../../components/Login';

const AuthLogin: React.FC = () => {
  const handleLogin = (username: string, email: string, password: string) => {
    // Lógica de autenticación específica de esta página
  };

  return (
    <div>
      <h2>Authentication - Login</h2>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default AuthLogin;