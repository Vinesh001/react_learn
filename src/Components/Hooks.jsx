// Hooks in React are functions that allow you to "hook into" React state and lifecycle features from function components
import { useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function Hooks(){
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
          setInterval(async () => {
            axios.get('https://sum-server.100xdevs.com/todos')
            .then((response)=>{
              setTodos(response.data.todos)
              console.log(response.data.todos)
            });        
            }, 2000);
    },[]);
    return(<>
        {todos.map(function(todo, index){
            return(<div key={index}>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.completed==true?"Completed":"Pending" }</button>
            </div>)
            
        })}
    </>)
}
