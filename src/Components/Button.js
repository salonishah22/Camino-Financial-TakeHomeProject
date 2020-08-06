import React from 'react';
import chaticon from '../Images/chaticon.png';
import callicon from '../Images/callicon.png';
import helpicon from '../Images/helpicon.png';
import arrowicon from '../Images/arrowicon.png';
function LanguageButton(props) {
    return(
        <button
            onClick = {props.onClick}
            style = {props.style}>
            {props.buttonText}
        </button>
    )
}

function HelpButton(props) {
    return(
        <button
            onClick = {props.onClick}
            style = {props.style}>
            {props.buttonText === "Help" ?
                <img
                    src = {helpicon}
                    style = {{width : 15, height : 15, marginRight : 4}}/>
                :
                <img
                    style = {{width : 15, height : 15, marginRight : 4}}
                    src = {arrowicon} />
            }
            {props.buttonText}
        </button>
    )
}

function HelpActionButton(props) {
    return(
        <button
            style = {props.style}>
            {props.buttonText === "EMAIL" ?
                <img
                    src = {chaticon}
                    style = {{width : 15, height : 15, marginRight : 12}}/>
                :
                <img
                    style = {{width : 15, height : 15, marginRight : 12}}
                    src = {callicon} />
            }
            {props.buttonText}
        </button>
    )
}

function NextButton(props) {
    return(
        <button
            onClick = {props.onClick}
            style = {props.style}>
            {props.buttonText}
        </button>
    )
}

export {
    LanguageButton,
    NextButton,
    HelpButton,
    HelpActionButton
}