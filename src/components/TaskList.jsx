import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskList() {
  const {tasks} = useContext(TaskContext);
  // console.info(tasks);
  if (tasks.length === 0) {
    return <h2 className=" text-4xl text-white mx-auto font-bold text-center
    ">No hay tareas</h2>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
