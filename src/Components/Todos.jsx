export default function Todos({todos}){
    return(<div>
        {todos.map((todo)=>{
            return( <div>
                <h1>Name: {todo.name}</h1>
                <h2>Age: {todo.age}</h2>
            </div>)
        })}
    </div>)
}