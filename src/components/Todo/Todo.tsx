import React from "react";



type PropsType = {
    headTitle: string,
    body?: string,
    tasks: TasksType[]
};

type TasksType = {
    id: Number, 
    title: String, 
    isDone: Boolean
}

const Todo = (props: PropsType) => {
    return(
        <div>
                <h3>{props.headTitle}</h3>
                <h3>{props.body}</h3>

                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" checked={true}/> <span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" checked={false}/> <span>{props.tasks[2].title}</span></li>
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