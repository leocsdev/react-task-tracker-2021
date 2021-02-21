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
    console.log('Delete', id)
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
      
    </div>
  );
}

export default App;
