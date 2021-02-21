// State and useState Hook
// 1. To use state in a functional component, import useState 
import { useState } from 'react'

const Tasks = () => {
  // 2. and add useState inside the functional component (temporarily to show how it works)
  // 3. Tasks in state is immutable, use setTasks to update a task instead
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

  return (
    <>
      {
        tasks.map((task) => (
          <h3 key={task.id}>{task.text}</h3>
        ))
      }
    </>
  )
}

export default Tasks
