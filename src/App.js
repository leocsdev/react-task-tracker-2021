import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // React hooks useState for addTask form toggle
  const [showAddTask, setShowAddTask] = useState(false);

  // React hooks useState for tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    // console.log(task)

    // Generate id temporarily
    const id = Math.floor(Math.random() * 10000) + 1;

    // Grab new task that is passed in from AddTask component and add id
    const newTask = { id, ...task };
    console.log(`New Task: ${newTask}`);

    // Save new task to tasks array
    // ...tasks - get all tasks existing
    // newTask - add new task to existing tasks array
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    // console.log('Delete', id)

    // Don't show task when its x button is clicked
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log('Toggled task ', id)

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {
        // if showAddTask is true, show the form
        showAddTask && <AddTask onAdd={addTask} />
      }

      {
        // Render tasks if there are tasks on the list, show no task msg when there are no msg.
        tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No tasks on the list."
        )
      }
    </div>
  );
}

export default App;
