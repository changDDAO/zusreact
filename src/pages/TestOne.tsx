import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import BearCounterState from "../states/BearCounterState";
import TestTwo from "../components/TestTwo";



function TestOne():React.JSX.Element{
    const navigate = useNavigate();
    const {bears, increase} = BearCounterState();
    const [id, setId] = useState<number>(0);
    const formHandler = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        increase(1);
        navigate("/test2");
    }
return (
   <div>
       <form onSubmit={formHandler}>
           <button type="submit" className="">increase</button>

       </form>
       <TestTwo/>
   </div>
);
}
export default TestOne;