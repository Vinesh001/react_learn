import { useState, useMemo } from "react";

export function UseMemo(){
    const [inputValue, setInputValue] = useState(1);
    const[counter, setCounter] = useState(0);

    let count = useMemo(()=>{
        let count = 0;
        for(let i = 1; i <= inputValue; i++){
            count+=i;
        }
        return count
    }, [inputValue])
    return(<div>
        <input onChange={function(e){
            setInputValue(e.target.value);
        }} type="text" placeholder="type any number to calculate the sum of 1 to that number"/>
        <div>Sum from 1 to {inputValue}: {count}</div>
        <button onClick={()=>{
            setCounter(counter+1);
        }}>Counter {counter}</button>
    </div>)
}