import React from "react";
import "./TodoForm.css";
import {TodoContext} from "../TodoContext"

function TodoForm(){

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Añade un nuevo TODO</label>
            <textarea placeholder = "Escribe un nuevo TODO" value={newTodoValue} onChange={onChange}></textarea>
            <div className="todoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="todoForm-button todoForm-button-cancel">Cancelar</button>
                <button type="submit" className="todoForm-button todoForm-button-add">Añadir</button>
            </div>
        </form>
    )
};

export {TodoForm};