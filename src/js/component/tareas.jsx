import React from "react";

const Tareas = ({tarea, index, deleteTarea}) =>{
const handleDelete =() =>{
    deleteTarea(index)
}
return(
    <>
     <li>
            <span>{tarea}</span> 
            <i
              className="fa-solid fa-xmark"
              onClick={handleDelete}
              
            ></i>
          </li>
          </>

)

}

export default Tareas