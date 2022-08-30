import { useState } from 'react'

const AddTask = ({ onAddTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        if(!text || !day) {
            alert('Please fill in an activity or a day!')
            return
        }

        onAddTask({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={submitForm}>
        <div className='form-control'>
            <label>Activity:</label>
            <input type='text' placeholder='Enter your activity...' value={text} onChange={(e) => {setText(e.target.value)}} />
        </div>
        <div className='form-control'>
            <label>Day & Time:</label>
            <input type='text' placeholder='Add a day and time...' value={day} onChange={(e) => {setDay(e.target.value)}} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder:</label>
            <input type='checkbox' value={reminder} onChange={(e) => {setReminder(e.currentTarget.checked)}} checked={reminder}/>
        </div>
        <input className='btn btn-block' type='submit' value='Save' />
    </form>
  )
}

export default AddTask