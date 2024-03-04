// src/pages/TutorialUseEffectPage.tsx
import React from 'react';
import UseEffectComponent from '../components/UseEffectComponent';


const TutorialUseEffect: React.FC = () => {
  console.log('Before before Render')
  return (
    <div>
      <h2>Tutorial Page UseEffect</h2>
      <UseEffectComponent />
    </div>
  );
};

export default TutorialUseEffect;

// https://www.youtube.com/watch?v=7WyeLo6HSpc&list=PLTg7E2ObeSjYGtrVsZfNLQZrzzuJloK9c&index=2