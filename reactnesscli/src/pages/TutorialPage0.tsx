// src/pages/TutorialPage0.tsx
import React from 'react';
import BasicCounter from '../components/BasicCounter';
import MessageContainer from '../components/MessageContainer';
import { MessageProvider } from "../providers/MessageProvider";



const Tutorial0: React.FC<{}> = () => {
  return (
    <div>
      <h2>Tutorial Page useState</h2>
      <BasicCounter />
      <MessageProvider>
        <MessageContainer/>
      </MessageProvider>

    </div>
  );
};

export default Tutorial0;