import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
    const new1 = 'new';
    const back1 = 'back';
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    
    return (
        <div className="App">
            <Todo headTitle={new1} body={'body'} tasks={tasks1}/>
            <Todo headTitle={back1} body={'body'} tasks={tasks2}/>
            <Todo headTitle={back1} body={'body'} tasks={tasks2}/>
            <Todo headTitle={back1} body={'body'} tasks={tasks2}/>
            <Todo headTitle={back1} body={'body'} tasks={tasks2}/>
            <Todo headTitle={back1} body={'body'} tasks={tasks2}/>

            

        </div>
    );
}


export default App;
