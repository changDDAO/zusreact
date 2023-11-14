import React from 'react'
import {Form, useNavigate} from "react-router-dom";
import IdStore from "../states/ID";
import Lobby from "./Lobby";

function InputID(){
    const {id, setId} = IdStore();
    const navigate = useNavigate();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        navigate("/lobby");
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setId(event.target.value);
    };

return (
    <>
   <form onSubmit={onSubmit}>
       <input
           autoComplete="off"
           onChange = {onChange}
           placeholder="Enter ID"
           id="nickname"
       />
       <button disabled={!id.length}>Enter</button>
   </form>

    </>
);
}
export default InputID;