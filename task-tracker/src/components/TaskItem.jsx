// IMPORTS: We don't need to import React in modern Vite, 
// but we do need to import CSS if we had any.

// COMPONENT DEFINITION: 
// A component is just a JavaScript function that returns UI (JSX).
// We accept "props" (properties) as an argument. Think of props as 
// arguments passed to a function.
function TaskItem({ task, onToggle, onDelete }) {
  
  return (
    // JSX: It looks like HTML, but it's actually JavaScript.
    // Notice we use 'className' instead of 'class' (because 'class' is a reserved word in JS).
    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      
      {/* EVENT HANDLING: onClick listens for a click. 
          We pass the onToggle function we received from the parent (App). */}
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
        style={{ marginRight: '10px' }}
      />

      {/* CONDITIONAL RENDERING: 
          If task.completed is true, apply a line-through style. 
          This is a ternary operator: condition ? true : false */}
      <span style={{ 
        textDecoration: task.completed ? 'line-through' : 'none', 
        color: task.completed ? 'gray' : 'black',
        flex: 1
      }}>
        {task.text}
      </span>

      {/* BUTTON: Calls the onDelete function when clicked, passing the task ID */}
      <button 
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  );
}

// EXPORT: We must export the component so other files can use it.
export default TaskItem;