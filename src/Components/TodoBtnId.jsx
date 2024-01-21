import axios from "axios";
import { useEffect, useState } from "react";

export function TodoBtnId(){

    const [id, setId] = useState(1);
    const [todo, setTodo] = useState({});
    useEffect(()=>{
        axios.get('https://sum-server.100xdevs.com/todo?id='+id)
        .then(async function(res){
            console.log(res)
            setTodo(res.data.todo);
        })
    },[id])

    return (<>
            <ButtonId setId={setId} id={id}></ButtonId>
            <TodoRender todo={todo}></TodoRender>
    </>)
}

function TodoRender({todo}){
    return(<>
        <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
        </div>
    </>)
}

function ButtonId({setId, id}){
    return(
        <div>
            <button onClick={()=>{
                setId(1);
            }}>one</button>
            <button onClick={()=>{
                setId(2);
            }}>two</button>
            <button onClick={()=>{
                setId(3);
            }}>three</button>
            <button onClick={()=>{
                setId(4);
            }}>four</button>
        </div>
    )
}