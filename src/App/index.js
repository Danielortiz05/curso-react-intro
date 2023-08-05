import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider } from '../TodoContext';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
};

// const todosList = [
//   {text: "Escribir un mensaje", completed : true },
//   {text: "Escribir un Correo", completed : false },
//   {text: "Escribir una Canción", completed : true },
//   {text: "Escribir un poema", completed : false },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

export default App;
