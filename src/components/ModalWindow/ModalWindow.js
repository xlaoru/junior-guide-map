import {Modal, ModalHeader} from 'react-bootstrap'

import './ModalWindow.css'

const ModalWindow = ({media, caption, isShowed, setShow}) => {
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader style={{'fontSize': '20px', 'fontWeight': '500'}} closeButton>{caption}</ModalHeader>
                <img src={media} style={{'padding': '10px'}}/>
            </Modal>
        </div>
    );
};

export default ModalWindow;