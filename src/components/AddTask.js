// Add component leve state
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    // Prevent submitting to a page
    e.preventDefault()

    // Add basic validation
    if (!text) {
      alert('Please add a task.')
      return
    }

    // grab task and pass the value to onAdd
    onAdd({ text, day, reminder })

    // Clear form after submit
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={(onSubmit)}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='Add Task' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      
      <div className='form-control'>
        <label>Day and Time</label>
        <input 
          type='text' 
          placeholder='Add Day and Time' 
          value={day} 
          onChange={(e) => setDay(e.target.value)} 
        />
      </div>
      
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox'
          checked={reminder}
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
