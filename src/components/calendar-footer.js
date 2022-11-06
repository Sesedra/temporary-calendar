import { useState } from 'react';
import './calendar-footer.css'

function Details(props){

    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: '',
        date: '',
    
    });

    const [tasks, setTasks] = useState([]);

    const [edit, setEdit] = useState(false);

    const [id, setId] = useState('');

    const [error, setError] = useState(false);

    const addTask = (e) => {
        e.preventDefault();
        if (!task.title || !task.description || !task.priority || !task.date) {
            setError(true);
            return;
        }
        setError(false);
        setTasks([...tasks, task]);
        setTask({
            title: '',
            description: '',
            priority: '',
            date: '',
        });
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const editTask = (task) => {
        setEdit(true);
        setTask(task);
        setId(task.id);
    }

    const updateTask = (e) => {
        e.preventDefault();
        if (!task.title || !task.description || !task.priority || !task.date) {
            setError(true);
            return;
        }
        setError(false);
        setTasks(tasks.map(task => task.id === id ? task : task));
        setEdit(false);
        setTask({
            title: '',
            description: '',
            priority: '',
            date: '',
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Task Manager</h1>
                    <div className="card card-body">
                        <form onSubmit={edit ? updateTask : addTask}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Title" onChange={(e) => setTask({...task, title: e.target.value})} value={task.title}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Description" onChange={(e) => setTask({...task, description: e.target.value})} value={task.description}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Priority" onChange={(e) => setTask({...task, priority: e.target.value})} value={task.priority}/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" placeholder="Date" onChange={(e) => setTask({...task, date: e.target.value})} value={task.date}/>
                            </div>
                            <button className="btn btn-primary btn-block">
                                {edit ? 'Update Task' : 'Add Task'}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.date}</td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm btn-block" onClick={() => editTask(task)}>Edit</button>
                                        <button className="btn btn-danger btn-sm btn-block" onClick={() => deleteTask(task.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


}



export default Details;