import {Modal, ModalHeader} from 'react-bootstrap'
import './ModalWindow.css'

const ModalWindow = ({caption, code, isShowed, setShow}) => {
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader closeButton/>
                <Modal.Title>{caption}</Modal.Title>
                <pre className='code-show' style={{'overflow': 'scroll', 'height': '400px'}}>{code}</pre>
            </Modal>
        </div>
    );
};

export default ModalWindow;