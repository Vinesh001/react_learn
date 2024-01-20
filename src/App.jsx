import { useState } from 'react'
import {Todos} from './components/Todos.jsx';
import { Header } from './components/Header.jsx';

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

  const [header, setHeader] = useState("Vinesh");

  return (
    <div><Header header={header}></Header>
      <Todos todos={todos}></Todos>
    </div>
  )
}


export default App
