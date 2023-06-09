import React from 'react'
import EditTaskModal from './EditTaskModal'

interface ITasks {
    tasks: any[];
    deleteTask: Function;
    taskEdited: Function;
}

export const Tasks = ({tasks, deleteTask, taskEdited}: ITasks) => {

    console.log('tasks length:::', tasks)
    if (tasks.length === 0) return null

    const TaskRow = (task: any, index: number) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{task._id}</td>
                  <td>{task.task}</td>
                  <td>{task.assignee}</td>
                  <td>
                    <div className="row">
                        <div className="col-md-6">
                        {task.status}
                        </div>
                        <div className="col-md-3">
                            <EditTaskModal task={task} taskEdited={taskEdited}/>
                        </div>
                        <div className="col-md-3">
                          <button type="button" onClick={(e) => deleteTask(task._id)} className="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
          )
    }

    const taskTable = tasks.map((task,index) => TaskRow(task,index))

    return(
        <div className="container">
            <h2>Inventario</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Modelo</th>
                    <th>Descripcion</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {taskTable}
                </tbody>
            </table>
        </div>
    )
}