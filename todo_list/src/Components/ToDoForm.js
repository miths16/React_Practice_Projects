import React, {useState} from 'react'

const ToDoForm = ({addToDo}) => {
    const [ value, setValue ] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addToDo(value)

        setValue("")
    }
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <h2>Get Things Done!</h2>
            <input type='text' className='todo-input' value={value} placeholder=" What's the task for today? " 
            onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default ToDoForm

