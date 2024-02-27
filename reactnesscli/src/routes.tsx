// src/routes.ts
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import TutorialPage0 from './pages/TutorialPage0';
import AuthPage from './pages/auth/LoginPage';
import TutorialUseEffectPage from './pages/TutorialUseEffectPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tutorial0" element={<TutorialPage0 />} />
      <Route path="/tutorial" element={<TutorialPage />} />
      <Route path="/tutorialUseEffect" element={<TutorialUseEffectPage />} />
    </Routes>
  );
};

export default AppRoutes;