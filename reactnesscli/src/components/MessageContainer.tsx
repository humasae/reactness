// src/components/Home.tsx
import React, { useEffect} from 'react';
import { useMessageToggleContext} from "../providers/MessageProvider";

const MessageContainer: React.FC = ({ unosMessages }) => {
  const massMessages = useMessageToggleContext();

  useEffect(() => {
    console.log('After render');
    
    unosMessages.map((unMessage) => (
      console.log(unMessage)
    ));
    massMessages.setMessages(unosMessages);

  }, []);

  const removeMessage = (e) => {
    const anterioresMessages = [...massMessages.messages];
    const itemToRemove = anterioresMessages.indexOf(e.target.id);
    anterioresMessages.splice(itemToRemove, 1);
    massMessages.setMessages(anterioresMessages);
  }

  return <div>
    <h2>Message Container</h2>

    <ul>
      {massMessages.messages.map((message, index) => (
        <div role="alert" className="alert alert-info w-96 mb-2" onClick={removeMessage} key={`key_${message}` }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6" id={message}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{message}</span>
        </div>
      ))}
    </ul>
  </div>

};

export default MessageContainer;