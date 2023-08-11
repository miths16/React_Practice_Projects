import React, {useState} from 'react'

const EditToDo = ({editToDo, task}) => {
    const [ value, setValue ] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()
        editToDo(value, task.id)

        setValue("")
    }
    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder=" Update the Task " 
            onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditToDo

