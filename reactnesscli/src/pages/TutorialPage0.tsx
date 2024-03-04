// src/pages/TutorialPage0.tsx
import React from 'react';
import BasicCounter from '../components/BasicCounter';
import MessageContainer from '../components/MessageContainer';
import { MessageProvider } from "../providers/MessageProvider";
import MessageSender from '../components/MessageSender';



const Tutorial0: React.FC<{}> = () => {
  const losMessagesIniciales = ['el cero pelotero', 'el segundo que tenemos', 'y van tres']
  return (
    <div>
      <h2>Tutorial Page useState</h2>
      <BasicCounter />
      <MessageProvider>
        <MessageContainer unosMessages={losMessagesIniciales}/>
        <MessageSender/>
      </MessageProvider>

    </div>
  );
};

export default Tutorial0;