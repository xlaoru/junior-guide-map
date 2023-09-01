import {Modal, ModalHeader} from 'react-bootstrap'

import { IModalWindow } from '../utils/Interfaces';

function ModalWindow ({imgData, title, isShowed, setShow}: IModalWindow) {
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader style={{'fontSize': '20px', 'fontWeight': '500'}} closeButton>{title}</ModalHeader>
                <img src={imgData} style={{'padding': '10px'}}/>
            </Modal>
        </div>
    );
};

export default ModalWindow;