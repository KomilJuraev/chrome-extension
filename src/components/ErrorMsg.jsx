import React from "react";

function ErrorMsg(props) {
    return (
        <p id="error-el">{props.errorMsg}</p>
    );
}

export default ErrorMsg;