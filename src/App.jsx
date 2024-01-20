import { useState } from 'react'
import {Todos} from './components/Todos.jsx';
import { Header } from './components/Header.jsx';
// import { Button } from './components/Button.jsx';

function App() {
  const [todos, setTodo] = useState([
    {
      name:"aryam",
      age:"-9 months"
    },
    {
      name:"sachin",
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

  // const [header, setHeader] = useState("Sachin");

  return (
    <>
      {/* <Button setHeader={setHeader}></Button> */}
      <Header></Header>
      <Todos todos={todos}></Todos>
    </>
  )
}


export default App
