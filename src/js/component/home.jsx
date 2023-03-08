import React, {useState} from "react";
import Input from "./input.jsx";
import Tareas from "./tareas.jsx";
import TareasCheck from "./tareasCheck.jsx";

const Home = () => {
 
  const [tareas, setTareas] = useState([]); //para ir creando las tareas y meterlas en un array
  const [tareasCheck, setTareasCheck] = useState([]); //para ir creando las tareas completadas y meterlas en un array

  const addTarea = (tarea) => {
    //se crea aqui la funcion para añadir la tarea y usarla en el componente
    //setTareas([...tareas, tarea]); //se copia la tarea y se añade una nueva
    setTareas([...tareas, tarea]);

  };
  const deleteTarea = (index) => {  //funcion para borrar tareas según un param index que se recibe desde tareas.jsx
    const newTareas = [...tareas]; //se almacena en una variable una copia de las tareas actuales 
    newTareas.splice(index, 1); //se elimina la tarea segun el indice, solo 1 tarea
    setTareas(newTareas); //se setea el array de nuevo sin la tarea que se acaba de borrar
  };
  const checkTarea = (tareaCheck, index) => { //funcion para marcar tareas completadas, se le pasa como param una tarea y el indice
    setTareasCheck([...tareasCheck, tareaCheck]); //se setea la tarea en array de tareas completadas
    deleteTarea(index); //llamamos a la funcion deletetarea pasando como param el indice parar borrar la tarea de la lista de tareas "normal"
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <ul>
          <Input addTarea={addTarea} />
          {tareas.map((tarea, index) => ( //se hace un mapeo de las tareas añadiendo un indice, una tarea y dos funciones para borrar y marcar como completa
            <Tareas
              key={index}
              tarea={tarea}
              index={index}
  deleteTarea={() => deleteTarea(index) /*usamos una funcion como prop, esta función la llamaremos en el componente tb*/}
              checkTarea={() => checkTarea(tarea, index)/*usamos una funcion como prop, la llamaremos en el componente */}
            />
          ))}
      <div>
       {tareas.length} {tareas.length >=2 ? "tareas" : "tarea"} </div> 
        </ul>
       
      </div>
      <div className="container">
        <h1>Completadas</h1>
        <ul>
          {" "}
          {tareasCheck.map((hecho) => ( //se mapea el listado de tareas completadas, pasando unicamente la tarea (hecho) al componente
            <TareasCheck hecho={hecho} />
          ))}
            <div> 
       {tareasCheck.length} {tareasCheck.length >=2 ? "tareas completadas" : "tarea completada"} </div> 
        </ul>
      </div>
     
    </>
  );
};

export default Home;
