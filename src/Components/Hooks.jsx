// Hooks in React are functions that allow you to "hook into" React state and lifecycle features from function components

export function Hooks({todos}){
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
