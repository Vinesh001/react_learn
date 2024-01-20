
export function Button(props){
    return(
        <div>
            <button onClick={function(){
                let number = Math.floor(Math.random()*100);
                props.setHeader(number)
            }}>Click to change the heading</button>
        </div>
    )
}