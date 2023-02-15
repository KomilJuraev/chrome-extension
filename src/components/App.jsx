import React, { useEffect, useState } from "react";

function App() {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [nameList, setNameList] = useState([]);
    const [urlList, setUrlList] = useState([]);
    const [checkboxId, setCheckBoxId] = useState([]);
    const [checked, setChecked] = useState();
    const [errorMsg, setErrorMsg] = useState();

    useEffect(() => {
        const myNames = JSON.parse(localStorage.getItem('nameList'));
        const myUrls = JSON.parse(localStorage.getItem('urlList'));

        if (myNames !== null && myNames !== undefined && myNames.length > 0) {
            setNameList(myNames);
        }

        if (myUrls !== null && myUrls !== undefined && myUrls.length > 0) {
            setUrlList(myUrls);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('nameList', JSON.stringify(nameList));
        localStorage.setItem('urlList', JSON.stringify(urlList));
    }, [nameList, urlList]);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleUrlChange(event) {
        setUrl(event.target.value);
    }

    function saveInput() {
        if (name === undefined || name === "" || name === " ") {
            if (url === undefined || url === "" || url === " ") {
                setErrorMsg("Please enter a value into Name and Url input boxes");
            } else {
                setErrorMsg("Please enter a value into Name input box");
            }
        } else if (url === undefined || url === "" || url === " ") {
            setErrorMsg("Please enter a value into Url input box");
        } else {
            setErrorMsg();
            setNameList([...nameList, name]);
            setName("");
            setUrlList([...urlList, url]);
            setUrl("");
        }
    }

    function saveTab() {
        if (name === undefined || name === "" || name === " ") {
            setErrorMsg("Please enter a value into Name input box");
        } else {
            setErrorMsg();
            setNameList([...nameList, name]);
            setName("");
            let currentUrl = window.location.href;
            setUrlList([...urlList, currentUrl]);
            setUrl("");
        }
    }

    function handleCheck(event) {
        // const checkBoxStatus = event.target.checked;
        let checkId = event.target.id;
        let id = parseInt(checkId.substring(16));
        setCheckBoxId([...checkboxId, id]);
        // setChecked(true)
    }

    function deleteSingleUrl() {
        if (checkboxId.length === 0) {
            setErrorMsg("Please Select a URL to Delete");
        } else {
            const newNameLst = nameList.filter((eachName, index) => { return !checkboxId.includes(index) });
            const newUrlLst = urlList.filter((eachUrl, index) => { return !checkboxId.includes(index) })
            setNameList(newNameLst);
            setUrlList(newUrlLst)
            setCheckBoxId([]);
            setChecked(false);
        }
    }

    function deleteAll() {
        setErrorMsg("");
        setNameList([]);
        setUrlList([]);
        localStorage.clear();
    }

    return (
        <div id="parent-div">
            <div id="input-sec">
                <input type="text" id="key-el" placeholder="Name" value={name} onChange={handleNameChange} onFocus={() => { setName("") }} />
                <input type="text" id="input-el" placeholder="URL" value={url} onChange={handleUrlChange} onFocus={() => { setUrl("") }} />
            </div>
            <p id="error-el">{errorMsg}</p>
            <div id="btn-sec">
                <button id="input-btn" onClick={saveInput}>SAVE INPUT</button>
                <button id="tab-btn" onClick={saveTab}>SAVE TAB</button>
                <button id="delete-btn" onClick={deleteSingleUrl}>DELETE</button>
                <button id="delete-all-btn" onDoubleClick={deleteAll}>DELETE ALL</button>
            </div>
            <ul id="ul-el">
                {nameList.map((eachName, index) => (
                    <li>
                        <input
                            id={'checkbox-number-' + index}
                            type='checkbox'
                            checked={checked}
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