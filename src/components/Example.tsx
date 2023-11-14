import * as React from 'react';
import Alert from 'react-bootstrap/Alert';
import ButtonsEl from "./ButtonsEl";
import {useNavigate} from "react-router-dom";
import IdStore from "../states/ID";

function Example() {
    const {id} = IdStore();
    return (
        <>
        <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Change this and that and try again.</p>
        </Alert>
        <ButtonsEl/>
        <p>{id}</p>
        </>
    );
}
export default Example;