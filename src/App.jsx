import { useState } from 'react'
import './App.css'
import Todos from './components/Todos';

function App() {
  const [todos, setTodo] = useState([
    {
      name:"aryam",
      age:"21"
    },
    {
      name:"amrit",
      age:"21"
    },
    {
      name:"gopal",
      age:"21"
    },
    {
      name:"vinesh",
      age:"21"
    }
  ]);

  return (
    <div>
      <Todos todos={todos}></Todos>
      
    </div>
  )
}


export default App
