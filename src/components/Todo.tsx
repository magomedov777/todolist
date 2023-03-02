import React from "react";


// Props types example ==============>>>>>>

type PropsType = {
    headTitle: string,
    body?: string,
    tasks: TasksType[]
};

type TasksType = {
    id: Number, 
    title: String, 
    isDone: boolean
}



const Todo = (props: PropsType) => {
    const tasksMap = props.tasks.map((el) => {
        return(  <li>
            <input type="checkbox" checked={el.isDone}/> 
            <span>{el.title}</span>
            </li>
    )})

    return(
        <div>
                <h3>{props.headTitle}</h3>
                <h3>{props.body}</h3>

                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksMap}
                    {/*<li><input type="checkbox" checked={true}/> <span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" checked={true}/> <span>{props.tasks[1].title}</span></li>
    <li><input type="checkbox" checked={false}/> <span>{props.tasks[2].title}</span></li>*/}

                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    )
}



export default Todo;