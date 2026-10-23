// IMPORTING HOOKS: useState is a "Hook". Hooks let you "hook into" 
// React features. useState lets us create variables that React will track.
import { useState } from 'react';

// IMPORTING OUR CUSTOM COMPONENT
import TaskItem from './components/TaskItem';

function App() {
  
  // STATE 1: The list of tasks.
  // useState takes an initial value. Here, it's an empty array [].
  // 'tasks' is the current value, 'setTasks' is the function to update it.
  const [tasks, setTasks] = useState([]);

  // STATE 2: The text currently typed in the input box.
  // Initial value is an empty string ''.
  const [inputValue, setInputValue] = useState('');

  // FUNCTION: Add a new task
  const addTask = () => {
    // Prevent adding empty tasks
    if (inputValue.trim() === '') return;

    // Create a new task object
    const newTask = {
      id: Date.now(), // Using current time as a unique ID
      text: inputValue,
      completed: false
    };

    // UPDATE STATE: We NEVER mutate state directly (e.g., tasks.push()).
    // We always create a NEW array. We use the spread operator (...) 
    // to copy existing tasks, and add the newTask at the end.
    setTasks([...tasks, newTask]);

    // Clear the input box
    setInputValue('');
  };

  // FUNCTION: Toggle task completion
  const toggleTask = (idToToggle) => {
    // We map over the existing tasks to create a new array
    setTasks(tasks.map(task => {
      // If the ID matches, flip the 'completed' boolean
      if (task.id === idToToggle) {
        return { ...task, completed: !task.completed };
      }
      // Otherwise, return the task unchanged
      return task;
    }));
  };

  // FUNCTION: Delete a task
  const deleteTask = (idToDelete) => {
    // Filter creates a new array containing only the tasks we want to keep
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  // FUNCTION: Handle typing in the input
  const handleInputChange = (event) => {
    // event.target.value gets the current text in the input
    setInputValue(event.target.value);
  };

  // FUNCTION: Handle pressing "Enter" on the keyboard
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    // The return statement must have exactly ONE parent element. 
    // We use a <div> here to wrap everything.
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      
      <h1>My Daily Tasks</h1>

      {/* INPUT SECTION */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="What needs to be done?"
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button 
          onClick={addTask}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Add Task
        </button>
      </div>

      {/* LIST SECTION */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* RENDERING LISTS: We use the .map() function to loop through 
            our 'tasks' array and return a <TaskItem> for each one.
            
            IMPORTANT: React requires a unique "key" prop for every item 
            in a list so it can track them efficiently. We use task.id. */}
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        ))}
      </ul>

      {/* Show a message if there are no tasks */}
      {tasks.length === 0 && <p style={{ color: 'gray' }}>No tasks yet. Add one above!</p>}
      
    </div>
  );
}

export default App;