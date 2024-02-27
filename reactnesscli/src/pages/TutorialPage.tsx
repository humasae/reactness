// src/pages/TutorialPage.tsx
import React from 'react';
// import Counter from '../components/Counter';
import MessageContainer from '../components/MessageContainer';
import MessageSender from '../components/MessageSender';
import { MessageProvider } from "../providers/MessageProvider";


const Tutorial: React.FC = () => {
  return (
    <div>
      <h2>Tutorial Page useState</h2>
      {/* <Counter /> */}
      <MessageProvider>
        <MessageContainer/>
        <MessageSender/>
      </MessageProvider>

    </div>
  );
};

export default Tutorial;

//https://www.youtube.com/watch?v=i4GgO4vZieg&list=PLTg7E2ObeSjYGtrVsZfNLQZrzzuJloK9c&index=2