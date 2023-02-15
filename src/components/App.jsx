import React, { useEffect, useState } from "react";
import InputFields from "./InputFields";
import Buttons from "./Buttons";
import List from "./List";
import ErrorMsg from "./ErrorMsg";

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
        setChecked();
    }, [nameList, urlList]);

    return (
        <div id="parent-div">
            <InputFields
                name={name}
                setName={setName}
                url={url}
                setUrl={setUrl}
            />
            <ErrorMsg
                errorMsg={errorMsg}
            />
            <Buttons
                name={name}
                setName={setName}
                url={url}
                setUrl={setUrl}
                nameList={nameList}
                setNameList={setNameList}
                urlList={urlList}
                setUrlList={setUrlList}
                setErrorMsg={setErrorMsg}
                checkboxId={checkboxId}
                setCheckBoxId={setCheckBoxId}
                setChecked={setChecked}
            />
            <List
                nameList={nameList}
                urlList={urlList}
                checked={checked}
                checkboxId={checkboxId}
                setCheckBoxId={setCheckBoxId}
            />
        </div >
    );
}

export default App;