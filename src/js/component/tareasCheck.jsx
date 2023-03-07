import React from "react";

const TareasCheck = (tareaCheck) => {
const hecho = tareaCheck.hecho
const fecha = new Date().toLocaleString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'})
  return (
    <>
      <li className="card">
        <span>{hecho}</span>
        <span className="fecha">{fecha}</span>
      </li>
    </>
  );
};

export default TareasCheck;
