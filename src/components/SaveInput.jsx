import React from "react";

function SaveInput(props) {
    function saveInput() {
        if (props.name === undefined || props.name.trim() === "") {
            if (props.url === undefined || props.url.trim() === "") {
                props.setErrorMsg("Please enter a value into Name and Url input boxes");
            } else {
                props.setErrorMsg("Please enter a value into Name input box");
            }
        } else if (props.url === undefined || props.url.trim() === "") {
            props.setErrorMsg("Please enter a value into Url input box");
        } else {
            props.setErrorMsg();
            props.setNameList([...props.nameList, props.name]);
            props.setName("");
            props.setUrlList([...props.urlList, props.url]);
            props.setUrl("");
        }
    }

    return (
        <button id="input-btn" onClick={saveInput}>SAVE INPUT</button>
    );
}

export default SaveInput;