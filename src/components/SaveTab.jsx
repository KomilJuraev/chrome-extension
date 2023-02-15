import React from "react";

function SaveTab(props) {
    function saveTab() {
        if (props.name === undefined || props.name === "" || props.name === " ") {
            props.setErrorMsg("Please enter a value into Name input box");
        } else {
            props.setErrorMsg();
            props.setNameList([...props.nameList, props.name]);
            props.setName("");
            let currentUrl = window.location.href;
            props.setUrlList([...props.urlList, currentUrl]);
            props.setUrl("");
        }
    }

    return (
        <button id="tab-btn" onClick={saveTab}>SAVE TAB</button>
    );
}

export default SaveTab;