import {Alert} from "react-bootstrap";

const AlertMessage = ({isCopied}) => {
    return (
        <div className="AlertMessage" style={{'marginTop' : '10px'}}>
            <Alert
                show={isCopied}
                variant="info"
            >
                Text Copied !
            </Alert>
        </div>
    );
};

export default AlertMessage;