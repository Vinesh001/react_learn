
export function Button(props){
    return(
        <div>
            <button onClick={function(){
                let number = Math.floor(Math.random()*100);
                props.setHeader(number)
            }}>Click to generate the random number</button>
        </div>
    )
}