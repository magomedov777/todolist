import React, {useState} from 'react';
import './App.css';
import Todolist from './Todolist';


const App = () => {
let[tasks1, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },                     //передаем данные тасок в хук useState 
        { id: 3, title: "ReactJS", isDone: false }
    ])

const removeTask = (taskID: number) => {                              //передаем id тасок в параметрах функции
        setTasks(tasks1.filter((el) => el.id !== taskID))}
    return (
        <div className="App">
            <Todolist 
             title="What to learn" 
              tasks={tasks1}
               removeTask={removeTask}/>
        </div>)}

export default App;
