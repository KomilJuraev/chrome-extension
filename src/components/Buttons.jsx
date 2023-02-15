import React from "react";
import SaveInput from "./SaveInput";
import SaveTab from "./SaveTab";
import Delete from "./Delete";
import DeleteAll from "./DeleteAll";

function Buttons(props) {



    return (
        <div id="btn-sec">
            <SaveInput
                name={props.name}
                setName={props.setName}
                url={props.url}
                setUrl={props.setUrl}
                nameList={props.nameList}
                setNameList={props.setNameList}
                urlList={props.urlList}
                setUrlList={props.setUrlList}
                setErrorMsg={props.setErrorMsg}
            />
            <SaveTab
                name={props.name}
                setName={props.setName}
                setUrl={props.setUrl}
                nameList={props.nameList}
                setNameList={props.setNameList}
                urlList={props.urlList}
                setUrlList={props.setUrlList}
                setErrorMsg={props.setErrorMsg}
            />
            <Delete
                nameList={props.nameList}
                setNameList={props.setNameList}
                urlList={props.urlList}
                setUrlList={props.setUrlList}
                checkboxId={props.checkboxId}
                setCheckBoxId={props.setCheckBoxId}
                setChecked={props.setChecked}
                setErrorMsg={props.setErrorMsg}
            />
            <DeleteAll
                setErrorMsg={props.setErrorMsg}
                setNameList={props.setNameList}
                setUrlList={props.setUrlList}
            />
        </div>
    );
}

export default Buttons;