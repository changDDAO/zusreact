import Image from 'react-bootstrap/Image';
import IdStore from "../states/ID";
import ModalView from "./Modal";

function Test():React.JSX.Element {
    const {id}= IdStore();

    return (
        <>
            <h1>{id}</h1>
            <ModalView/>
        </>
    );
}

export default Test;