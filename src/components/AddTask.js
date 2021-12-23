import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false) // default for reminder is false


    return (
        <form className='add-form'> 
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day and time</label>
                <input type='text' placeholder='Day and time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='save task' className='btn btn-block' />
        </form>
    )
}


export default AddTask
