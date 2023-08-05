import React from "react";
import "./TodoTitle.css";
import { TodoContext } from "../TodoContext";

function TodoTitle() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);
    return (
        <h1 className="main-title">
            Has completado 
            <span> {completedTodos} </span> 
            de 
            <span> {totalTodos} </span> 
            TODOS
        </h1>
    );
};

export {TodoTitle};