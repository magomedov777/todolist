import React from "react";



type PropsType = {
    headTitle: string,
    body?: string
};

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
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
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