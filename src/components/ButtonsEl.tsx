import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import IdStore from "../states/ID";

function OutlineTypesExample() {
    const navigate = useNavigate();
    const {setId} = IdStore();

    const convertPage = ()=>{
        setId("changho");
        navigate("/test");

    }
    return (
        <>
            <Button variant="outline-primary" onClick={convertPage}>Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>
        </>
    );
}

export default OutlineTypesExample;