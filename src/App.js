import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import NoTask from './components/NoTask'

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Washing utencils',
        day: 'Sunday at 08:00 a.m',
        reminder: true,
    },
    {
        id: 2,
        text: 'Mopping the house',
        day: 'Wednesday at 05:00 p.m',
        reminder: true,
    },
    {
        id: 3,
        text: 'Doing coursework',
        day: 'Friday at 02:00 p.m',
        reminder: false,
    }
])

  const onAddTask = (task) => {
    const id = Math.ceil( Math.random() * 10000 ) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) => id === task.id ? {...task, reminder: !task.reminder} : task )
    )
  }

  const deleteTask = (id) => {
    setTasks(
      tasks.filter( (task) => id !== task.id && task )
    )
  }

  const toggleFormButton = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='container'>
      <Header toggleForm={toggleFormButton} showForm={showForm} />
      {showForm && <AddTask onAddTask={onAddTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : <NoTask /> }
    </div>
  );
}

export default App;
