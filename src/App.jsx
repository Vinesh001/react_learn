import { useState} from 'react';
import { useEffect } from 'react';
import {Todos} from './components/Todos.jsx';
import { Header } from './components/Header.jsx';
import { Wrapper } from './components/Wrapper.jsx';
import { Hooks } from './components/Hooks.jsx';
import { Button } from './components/Button.jsx';
import axios from "axios"

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
          // setInterval(async () => {
            axios.get('https://sum-server.100xdevs.com/todos')
            .then((response)=>{
              setTodos(response.data.todos)
              console.log(response.data.todos)
            });        
            // }, 5000);
          },[]);
          // console.log("vine",todos)
          
  return (
    <>
      {/* <Button setHeader={setHeader}></Button> */}
      <Header></Header>
      {/* <Todos todos={todos}></Todos> */}
      <Wrapper></Wrapper>
      <Hooks todos={todos}></Hooks>
    </>
  )
}


export default App
