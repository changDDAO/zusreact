import React, {useState} from 'react'
import {Form, InputGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function UseState(){
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [nickName, setNickname] = useState<string>("");
    function onChangeName(e: React.ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    function onChangeNickname(e: React.ChangeEvent<HTMLInputElement>){
        setNickname(e.target.value);
    }
    function onClick(e: React.MouseEvent<HTMLButtonElement>){
        navigate("/useeffect");
    }
return (
   <div>
       <InputGroup size="lg">
           <InputGroup.Text id="input1">Name</InputGroup.Text>
           <Form.Control
               onChange={onChangeName}
               aria-label="Large"
               aria-describedby="inputGroup-sizing-sm"
           ></Form.Control>
       </InputGroup>
       <InputGroup size="sm">
           <InputGroup.Text  id="input2">NickName</InputGroup.Text>
           <Form.Control onChange={onChangeNickname}
           />
       </InputGroup>
       <div className="center">
       <div>
           <b>이름 : {name}</b>
       </div>
       <div>
           <b>닉네임 : {nickName}</b>
       </div>
        <div>
            <Button variant="success" onClick={onClick}>Go UseEffectPage</Button>{' '}
        </div>
       </div>
   </div>
);
}
export default UseState;