import {Modal, ModalHeader} from 'react-bootstrap'

import './ModalWindow.css'

const ModalWindow = ({caption, image, isShowed, setShow}) => {
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader closeButton/>
                <Modal.Title>{caption}</Modal.Title>
                <img src={image}/>
            </Modal>
        </div>
    );
};

export default ModalWindow;