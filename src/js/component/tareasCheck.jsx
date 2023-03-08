import React from "react";

const TareasCheck = (tareaCheck) => { //se le pasa un prop que es una tarea unica mapeada desde el home
const hecho = tareaCheck.hecho //como tareacheck es un obj, hay que sacar el campo hecho y almacenar en una var
const fecha = new Date().toLocaleString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}) //creamos una fecha y se almacena
  return (
    <>
      <li className="card">
        <span>{hecho/*se pinta en HTML la variable del obj que es el campo hecho que hemos traido desde home/ */}</span>
        <span className="fecha">{fecha}</span>
      </li>
    </>
  );
};

export default TareasCheck;
