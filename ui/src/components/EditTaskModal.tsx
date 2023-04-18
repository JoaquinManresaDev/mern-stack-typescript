import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { TaskService} from '../services/TaskService'


interface IEditTaskModal {
  task: any;
  taskEdited: Function;
}

export default function EditTaskModal({task, taskEdited}: IEditTaskModal) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskService = new TaskService();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
      taskService.editTask(data).then(response => {
        taskEdited(response);
        setShow(false);
    });
    };
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Editar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Listado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="form-group col-md-3">
                  <label htmlFor="taskId">Id</label>
                  <input {...register("id")} type="text" className="form-control" defaultValue={task.id} name="id" id="id" disabled />
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="task">Modelo</label>
                    <input {...register("task")} type="text" className="form-control" defaultValue={task.task} name="task" id="task" placeholder="Create a Task" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="assignee">Descripcion</label>
                    <input {...register("assignee")} type="text" className="form-control" defaultValue={task.assignee} name="assignee" id="assignee" placeholder="Assignee" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="status">Status:</label>
                    <select {...register("status")} name="status" defaultValue={task.status} className="form-control" id="status">
                        <option>Funcionando</option>
                        <option>Fuera de servicio</option>
                        <option>No se encuentra</option>
                    </select>
                </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
            </form>
          </Modal.Body>
          
        </Modal>
      </>
    );
}