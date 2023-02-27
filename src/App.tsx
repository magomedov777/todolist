import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';

function App() {
    const new1 = 'new';
    const back1 = 'back';
    return (
        <div className="App">
            <Todo headTitle={new1} body={'body'}/>
            <Todo headTitle={back1} body={'body'}/>
            

        </div>
    );
}


export default App;
