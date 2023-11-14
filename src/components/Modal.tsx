import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import IdStore from "../states/ID";

function ModalView() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {setId} = IdStore();
    const onClick = () =>{
        setId("kimchi");
        navigate("/")
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onClick}>Understood go homepage</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalView;