import React, {useState} from "react";
import Input from "./input.jsx";
import Tareas from "./tareas.jsx";

const Home = () => {
  //const [input, setInput] = useState(""); //para controlar el cambio del input
  const [tareas, setTareas] = useState([]); //para ir creando las tareas y meterlas en un array

  const addTarea = (tarea) => {
    //se crea aqui la funcion para añadir la tarea y usarla en el componente
    setTareas([...tareas, tarea]); //se copia la tarea y se añade una nueva
  };
  const deleteTarea = (index) => {
    const newTareas = [...tareas];
    newTareas.splice(index, 1);
    setTareas(newTareas);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <ul>
        <Input addTarea={addTarea} />
        {tareas.map((tarea, index) => (
          <Tareas
            key={index}
            tarea={tarea}
            index={index}
            deleteTarea={() => deleteTarea(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
