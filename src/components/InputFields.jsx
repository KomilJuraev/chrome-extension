import React from "react";

function InputFields(props) {

    function handleNameChange(event) {
        props.setName(event.target.value);
    }

    function handleUrlChange(event) {
        props.setUrl(event.target.value);
    }

    return (
        <div id="input-sec">
            <input type="text" id="key-el" placeholder="Name" value={props.name} onChange={handleNameChange} onFocus={() => { props.setName("") }} />
            <input type="text" id="input-el" placeholder="URL" value={props.url} onChange={handleUrlChange} onFocus={() => { props.setUrl("") }} />
        </div>
    );
}

export default InputFields;