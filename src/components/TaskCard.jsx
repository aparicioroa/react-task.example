import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  
const {deleteTask}=useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capita
      ">{task.title}</h1>
      <p className="text-gray500 text-sm">{task.description}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400">
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
