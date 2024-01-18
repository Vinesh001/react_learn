import { useState } from 'react'
import './App.css'

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
      {todos.map(function(todo){
        return <Todo name={todo.name} age={todo.age}> </Todo>
      })}
      
    </div>
  )
}

function Todo(props){
  return(
    <div>
    <h1>Name: {props.name}</h1>
    <h1>Age: {props.age}</h1>
  </div>
  ) 
}

export default App
