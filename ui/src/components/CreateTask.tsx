import React from 'react'
import { useForm } from "react-hook-form";
import { TaskService} from '../services/TaskService'

export default function CreateTask(props: any) {

    const { register, handleSubmit } = useForm();

    const taskService = new TaskService();

    const onSubmit = (data: any, e: any) => {
        taskService.createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Listado inventario</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Modelo</label>
                            <input {...register("task")} placeholder="Agregar modelo" className="form-control" name="task" id="task" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Descripcion</label>
                            <input {...register("descripcion")} placeholder="Assignee" className="form-control" name="assignee" id="assignee" />
                        </div>
                    </div>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Status:</label>
                            <select className="form-control" {...register("status")}>
                                <option>Funcionando</option>
                                <option>Fuera de servicio</option>
                                <option>No se encuentra</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger mrgnbtm" />
                </form>
                </div>
            </div>
        </div>
    )
}