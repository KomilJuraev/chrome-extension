import React from "react";

function DeleteAll(props) {
    function deleteAll() {
        props.setErrorMsg("");
        props.setNameList([]);
        props.setUrlList([]);
        localStorage.clear();
    }

    return (
        <button id="delete-all-btn" onDoubleClick={deleteAll}>DELETE ALL</button>
    );
}

export default DeleteAll;