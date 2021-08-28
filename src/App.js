import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';


//ReactDOM.render(<Chatbox />, document.getElementById('root'));

const App = () => {
    if(!localStorage.getItem('username')) return <Login />
    return (
        <ChatEngine
            height="100vh"
            projectID="802486e6-eff9-4cac-9241-66e6d58151cb"        
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
        );
    }

export default App;
