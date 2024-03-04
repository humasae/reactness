// src/components/MessageSender.tsx
import React from 'react';
import {useMessageToggleContext} from "../providers/MessageProvider";

const MessageSender: React.FC = () => {
  const massMessages = useMessageToggleContext();
  
  const addMessage = () => {
    massMessages.setMessages([...massMessages.messages, document.getElementById('newMessageToAdd').value])
  }

  return <div>
    <label className="input input-bordered flex items-center gap-2">
      Message:
      <input id='newMessageToAdd' type="text" className="grow" placeholder="message"/>
    </label>

    <button onClick={addMessage}>Add Message</button>
  </div>

};

export default MessageSender;