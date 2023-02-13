import React, { useState } from "react";

function App() {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [nameList, setNameList] = useState([]);
    const [urlList, setUrlList] = useState([]);
    const [checkboxId, setCheckBoxId] = useState([]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleUrlChange(event) {
        setUrl(event.target.value);
    }

    function saveInput() {
        setNameList([...nameList, name]);
        setName();
        setUrlList([...urlList, url]);
        setUrl();
    }

    function saveTab() {
        setNameList([...nameList, name]);
        setName();
        let currentUrl = window.location.href;
        setUrlList([...urlList, currentUrl]);
        console.log(urlList);
    }

    function handleCheck(event) {
        // const checkBoxStatus = event.target.checked;
        let checkId = event.target.id;
        let id = parseInt(checkId.substring(16));
        setCheckBoxId([...checkboxId, id]);

    }

    function deleteSingleUrl() {
        const newNameLst = nameList.filter((eachName, index) => { return !checkboxId.includes(index) });
        const newUrlLst = urlList.filter((eachUrl, index) => { return !checkboxId.includes(index) })
        setNameList(newNameLst);
        setUrlList(newUrlLst)
        setCheckBoxId([]);
    }

    return (
        <div id="parent-div">
            <div id="input-sec">
                <input type="text" id="key-el" placeholder="Name" value={name} onChange={handleNameChange} />
                <input type="text" id="input-el" placeholder="URL" value={url} onChange={handleUrlChange} />
            </div>
            <p id="error-el"></p>
            <div id="btn-sec">
                <button id="input-btn" onClick={saveInput}>SAVE INPUT</button>
                <button id="tab-btn" onClick={saveTab}>SAVE TAB</button>
                <button id="delete-btn" onClick={deleteSingleUrl}>DELETE</button>
                <button id="delete-all-btn">DELETE ALL</button>
            </div>
            <ul id="ul-el">
                {nameList.map((eachName, index) => (
                    <li>
                        <input
                            id={'checkbox-number-' + index}
                            type='checkbox'
                            onChange={handleCheck}
                        />
                        <span id="urlName">
                            {eachName} : <a href={urlList[index]}>{urlList[index]}</a>
                        </span>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default App;