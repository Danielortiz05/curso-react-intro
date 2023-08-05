import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton (){
    const { openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <button className="createButton" onClick={() => {
            if(openModal){
                setOpenModal(false);
            }else{
                setOpenModal(true);
            }
        }} type="button">+</button>
    );
};

export {CreateTodoButton};