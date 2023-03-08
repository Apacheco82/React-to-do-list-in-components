import React from "react";

const Tareas = ({tarea, index, deleteTarea, checkTarea}) => { //se le pasa como prop la tarea, el indice y las dos funciones que estan en home
 
  const handleCheck = () => { //esta funcion intermedia es llamada desde el onclick del boton check 
    checkTarea(tarea, index); //llamamos a la funcion de checktarea que esta en home
  };
 
  const handleDelete = () => { //esta funcion intermedia es llamada desde el onclick del boton delete
    deleteTarea(index); //llamamos a la funcion deletetarea que esta en home
  };
  return (
    <>
      <li>
        <span>{tarea}</span>
        <i className="fa-solid fa-xmark" onClick={handleDelete /* el evento que llama a la funcion intermedia de arriba/ */}></i>
        <i className="fa-solid fa-check" onClick={handleCheck}></i>
      </li>
    </>
  );
};

export default Tareas;
