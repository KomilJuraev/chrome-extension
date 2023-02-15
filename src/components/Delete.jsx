import React from "react";

function Delete(props) {
    function deleteSingleUrl() {
        if (props.checkboxId.length === 0) {
            props.setErrorMsg("Please Select a URL to Delete");
        } else {
            const newNameLst = props.nameList.filter((eachName, index) => { return !props.checkboxId.includes(index) });
            const newUrlLst = props.urlList.filter((eachUrl, index) => { return !props.checkboxId.includes(index) })
            props.setNameList(newNameLst);
            props.setUrlList(newUrlLst)
            props.setCheckBoxId([]);
            props.setChecked(false);
        }
    }
    return (
        <button id="delete-btn" onClick={deleteSingleUrl}>DELETE</button>
    );
}

export default Delete;