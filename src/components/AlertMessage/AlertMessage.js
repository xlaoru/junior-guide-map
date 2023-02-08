import {Alert} from "react-bootstrap";

import './AlertMessage.css'

const AlertMessage = ({isCopied, activeLanguage}) => {
    return (
        <div className="AlertMessage">
            <Alert
                show={isCopied}
                variant="info"
            >
                {activeLanguage === 0 ? 'Code Copied !' : 'Код Скопійовано'}
            </Alert>
        </div>
    );
};

export default AlertMessage;