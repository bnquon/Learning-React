import React, {useState} from "react";

function Todo () {

    const [tasks, setTasks] = useState(["Eat", "Drink", "Sleep"]);
    const [newTask, setNewTask] = useState("");

    function inputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        setTasks((t) => (newTask !== "" ? [...t, newTask]: t));
        setNewTask("");
    }

    function deleteTask(index) {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    }

    return(
        <div className="todo-container">
            <h1 id="title">ToDo List</h1>

            <div id="add">
                <input type="text" 
                placeholder="Enter Item..."
                value={newTask}
                onChange={inputChange}/>
                <button onClick={addTask}>Add</button>
            </div>

            <div id="content">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <h3 className="task">{task}</h3>
                            <button className="delete-btn" 
                            onClick={() => deleteTask(index)}>
                                Delete
                            </button>                        
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Todo