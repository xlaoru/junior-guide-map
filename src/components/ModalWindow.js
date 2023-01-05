import {Modal, ModalHeader} from 'react-bootstrap'

const ModalWindow = ({caption, image, isShowed, setShow}) => {
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader closeButton/>
                <Modal.Title style={{'textAlign': 'center', 'padding': '10px'}}>{caption}</Modal.Title>
                <img src={image} style={{'padding': '10px'}}/>
            </Modal>
        </div>
    );
};

export default ModalWindow;