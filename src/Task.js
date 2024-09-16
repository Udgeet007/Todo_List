export const Task = (props) => {
  return (
    <div id="delete"
    className="task"
    style={{backgroundColor: props.completed ? "orange" : "cadetblue"}}
    >
      <h2>{props.taskName}</h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.DeleteTask(props.id)}>X</button>
    </div>
  );
};
