import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoTitle } from '../TodoTitle';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import "./AppUI.css";
import React from 'react';
import {Modal} from "../Modal";
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';


function AppUI(){
    const {loading, 
            error, 
            searchedTodos, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoTitle />
            <TodoSearch />
      
            <TodoList>
                {loading && 
                    <>
                        <TodosLoading/> 
                        <TodosLoading/> 
                        <TodosLoading/>
                    </>
                }
                {error && <TodosError/>}
        
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>  }
        
                {searchedTodos.map(todo =>(
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete = {()=> completeTodo(todo.text)} 
                        onDelete={() => {deleteTodo(todo.text)}}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </React.Fragment>
    )
};

export { AppUI };