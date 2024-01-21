import { useState} from 'react';
import { useEffect } from 'react';
import {Todos} from './components/Todos.jsx';
import { Header } from './components/Header.jsx';
import { Wrapper } from './components/Wrapper.jsx';
import { Hooks } from './components/Hooks.jsx';
import { Button } from './components/Button.jsx';
import {TodoBtnId} from './components/TodoBtnId.jsx'
import axios from "axios"

function App() {

  
          
  return (
    <>
      {/* <Button setHeader={setHeader}></Button> */}
      <Header></Header>
      {/* <Todos todos={todos}></Todos> */}
      <Wrapper></Wrapper>
      {/* <Hooks></Hooks> */}
      <TodoBtnId></TodoBtnId>
    </>
  )
}


export default App
