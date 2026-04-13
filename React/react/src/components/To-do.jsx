import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [tasks, setTasks] = useState((() => {
        const savedTasks = localStorage.getItem('tasks')
        return savedTasks ? JSON.parse(savedTasks) : [];
    }))
    const [newTask, setNewTask] = useState('')
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    function handleSubmit(event) {
        event.preventDefault();
        if (newTask.trim() === '') {
            alert('Заполните инпут');
            return
        }
        const task = {
            id: Date.now(),
            title: newTask,
        }
        setTasks((prev) => [...prev, task])
        setNewTask('')
    }

  return (
    <div className='mx-auto max-w-5xl shadow-sm border p-6 rounded-2xl'>
        <form onSubmit={handleSubmit} className='flex mb-4 gap-3'>
            <input 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            className='flex-1 rounded-xl border px-4 py-3 outline-0 focus:border-blue-600' 
            type="text" 
            placeholder='Введите новую задачу' />
            <button type='submit' className='rounded-xl bg-black text-white px-3 py-4 cursor-pointer'>Добавить</button>
        </form>
        {
            tasks.length ===0 ? ( <p>Список пустой</p> ) 
            : (
                <ul>
                    {
                        tasks.map((task) => (
                            <li key={task.id} className='rounded-xl borfer px-4 py-3'>
                                {task.title}
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}
