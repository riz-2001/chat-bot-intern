import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';

import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  return (
    <div className='App'>
      {!isChatOpen ? (
        <button onClick={() => setIsChatOpen(true)}> Enroll Now!</button>
      ) : (
        <div
          style={{
            minWidth: '300px',
            // overflow: 'scroll',
            // backgroundColor: 'green',
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
}

export default App;
