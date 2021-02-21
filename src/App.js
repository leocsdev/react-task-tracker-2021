import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // Delete task
  const deleteTask = (id) => {
    // console.log('Delete', id)

    // Don't show task when its x button is clicked
    setTasks(tasks.filter((task) => 
      task.id !== id
    ))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    // console.log('Toggled task ', id)

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task

      ))
  }

  return (
    <div className='container'>
      <Header />
      {
        // Render tasks if there are tasks on the list, show no task msg when there are no msg.
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks on the list.'
      }

    </div>
  );
}

export default App;
