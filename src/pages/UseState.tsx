import React, {useState} from 'react'
import {Form, InputGroup} from "react-bootstrap";

function UseState(){
    const [name, setName] = useState<string>("");
    const [nickName, setNickname] = useState<string>("");
    function onChangeName(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    function onChangeNickname(e: React.ChangeEvent<HTMLInputElement>){
        setNickname(e.target.value);
    }
return (
   <div>
       <InputGroup size="lg">
           <InputGroup.Text onChange={onChangeName} id="input1">Name</InputGroup.Text>
           <Form.Control
               aria-label="Large"
               aria-describedby="inputGroup-sizing-sm"
           ></Form.Control>
       </InputGroup>
       <InputGroup size="lg">
           <InputGroup.Text onChange={onChangeNickname} id="input2">NickName</InputGroup.Text>
           <Form.Control
               aria-label="Large"
               aria-describedby="inputGroup-sizing-sm"
           ></Form.Control>
       </InputGroup>

   </div>
);
}
export default UseState;