import { useContext, useState } from "react";
import { Mycontext } from "./Mycontext";
export default function Mycomponent(){//consumer
    const {text,setText}=useContext(Mycontext)
    return(
        <div>
            
            <button onClick={()=>setText("Helo WoRld")}>click</button>
        </div>

    );
}