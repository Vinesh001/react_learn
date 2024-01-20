import { Button } from "./Button";
import { useState } from "react";

export function Header(){
    const [header, setHeader] = useState("Sachin");
    return (<div>
        <Button setHeader={setHeader}></Button>
        <h1>Random number: {header}</h1>
    </div>)
}