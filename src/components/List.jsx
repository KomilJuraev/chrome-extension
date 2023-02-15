import React from "react";

function List(props) {
    function handleCheck(event) {
        const checkBoxStatus = event.target.checked;
        let checkId = event.target.id;
        let id = parseInt(checkId.substring(16));
        if (checkBoxStatus === false) {
            const newIds = props.checkboxId.filter((eachIndex) => { return eachIndex !== id });
            props.setCheckBoxId(newIds);
        } else {
            props.setCheckBoxId([...props.checkboxId, id]);
        }
        // setChecked(true)
    }

    return (
        <ul id="ul-el">
            {props.nameList.map((eachName, index) => (
                <li>
                    <input
                        id={'checkbox-number-' + index}
                        type='checkbox'
                        checked={props.checked}
                        onChange={handleCheck}
                    />
                    <span id="urlName">
                        {eachName} : <a href={props.urlList[index]}>{props.urlList[index]}</a>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default List;