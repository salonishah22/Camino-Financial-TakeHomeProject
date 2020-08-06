import React from 'react';
import styles from './styles';

function TextInput(props) {
    return (
        <div style = {styles.TextInputContainerStyle}>
            <div style = {{display : 'flex', flexDirection : 'row'}}>
                {props.TextInputLabel}
                <div style = {{color : 'red'}}>
                    *
                </div>
            </div>
            <input
                value = {props.value}
                onChange = {(event) => props.onClick(event.target.value)}
                style = {styles.TextInputBox}/>
        </div>
    )
}

export default TextInput;