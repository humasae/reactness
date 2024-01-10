// src/routes.ts
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/auth/LoginPage';
import AuthPageObject from './pages/auth/LoginPageObject';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<AuthPageObject />} />
    </Routes>
  );
};

export default AppRoutes;