import React from "react";

const Tareas = ({tarea, index, deleteTarea, checkTarea}) => {
  const handleCheck = () => {
    checkTarea(tarea, index);
  };
  const handleDelete = () => {
    deleteTarea(index);
  };
  return (
    <>
      <li>
        <span>{tarea}</span>
        <i className="fa-solid fa-xmark" onClick={handleDelete}></i>
        <i className="fa-solid fa-check" onClick={handleCheck}></i>
      </li>
    </>
  );
};

export default Tareas;
