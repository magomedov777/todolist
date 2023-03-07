import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}   

function Todolist(props: PropsType){
let[filterValue, setFilterValue] = useState('All')

const filterTask = (buttonName: string) => {
         setFilterValue(buttonName)}

let filteredTask = props.tasks
    
if(filterValue === 'Active'){filteredTask = props.tasks.filter((el)=>!el.isDone)}
if(filterValue === 'Completed'){filteredTask = props.tasks.filter((el)=>el.isDone)}
    
    return (
       <div>
        <h3>{props.title}</h3>
         <div>
          <input/>
           <button>+</button>
         </div>
            <ul>
            {filteredTask.map((el) => {
                   return  <li key={el.id}>
                    <button onClick={() => props.removeTask(el.id)}>X</button>
                     <input type="checkbox" 
                       checked={el.isDone}/> 
                        <span>{el.title}</span></li>})}
            </ul>
              <div>
               <button onClick={()=> filterTask('All')}>All</button>
               <button onClick={()=> filterTask('Active')}>Active</button>
               <button onClick={()=> filterTask('Completed')}>Completed</button>
              </div>
            </div>)};

export default Todolist;
