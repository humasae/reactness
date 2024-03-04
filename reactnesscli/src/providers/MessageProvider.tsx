// src/providers/MessageProvider.tsx
import React, { useState, useContext } from 'react'

const messageToggleContext = React.createContext();

export function useMessageToggleContext () {
    return useContext(messageToggleContext);
}

export function MessageProvider(props) {
    
    const [messages, setMessages] = useState(['hola', 'buenas']);

    return <div>
        <messageToggleContext.Provider value={{messages, setMessages}}>
            {props.children}
        </messageToggleContext.Provider>
    </div>

}