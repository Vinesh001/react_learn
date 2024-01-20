import React from "react"

export default Todos = React.memo( function Todos({todos}){
    return(<div>
        {todos.map((todo)=>{
            return( <div>
                <h2>Name: {todo.name}</h2>
                <h3>Age: {todo.age}</h3>
            </div>)
        })}
    </div>)
})