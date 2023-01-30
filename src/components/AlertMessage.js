import {Alert} from "react-bootstrap";

const AlertMessage = ({isCopied, activeLanguage}) => {
    return (
        <div className="AlertMessage" style={{'marginTop' : '10px'}}>
            <Alert
                show={isCopied}
                variant="info"
                style={{'textAlign' : 'center'}}
            >
                {activeLanguage === 0 ? 'Code Copied !' : 'Код Скопійовано'}
            </Alert>
        </div>
    );
};

export default AlertMessage;