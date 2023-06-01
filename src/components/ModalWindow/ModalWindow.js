import {useRef} from 'react'
import {Modal, ModalHeader} from 'react-bootstrap'

import './ModalWindow.css'

const ModalWindow = ({caption, code, isShowed, setShow}) => {
    const output = useRef()
    function typeText() {
        let line = 0
        let count = 0
        let out = ''
        function typeLine() {
            let interval = setTimeout(
                () => {
                    out += code[line][count]
                    if (output.current) {
                        output.current.innerText = out + '|'
                    }
                    count++
                    if (count >= code[line].length) {
                            count = 0;
                            line++
                        if (line === code.length) {
                            clearTimeout(interval)
                            if (output.current) {
                                output.current.innerText = out
                            }
                            return true
                        }
                    }
                    typeLine()
                }, 50)
        }
        typeLine()
    }
    return (
        <div>
            <Modal
                show={isShowed}
                onHide={() => setShow(false)}
            >
                <ModalHeader closeButton/>
                <Modal.Title>{caption}</Modal.Title>
                <pre className='code-show' ref={output} style={{'overflow': 'scroll', 'height': '560px'}}>{typeText()}</pre>
            </Modal>
        </div>
    );
};

export default ModalWindow;