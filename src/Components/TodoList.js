import { useState } from "react";
export default function TodoList(){
    const [formData,SubmitFromData]=useState({
        time:"",
        note:""
    })
    const [TableData,SubmitTable]=useState([])

    function HandleForm(e){
        const {name,value} = e.target
        
        SubmitFromData({...formData,[name]:value});
    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFromData({
            time:"",
            note:""
    

        } )
}
 return(
    <div>
        <h1>Todo List</h1>
        <div class="form">
            <input name="time"
            type="time"
            value={formData.time}
            onChange={HandleForm}
            />
             <input name="note"
            type="text"
            value={formData.note}
            onChange={HandleForm}
            />
            <br/>
            <button onClick={HandleSubmit}>Submit</button>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Note</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {TableData.map((data,index)=>(
                    <tr>
                        <td>{data.time}</td>
                        <td>{data.note}</td>
                        
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
)
}