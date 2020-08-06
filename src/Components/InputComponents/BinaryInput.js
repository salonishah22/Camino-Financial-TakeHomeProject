import React from 'react';
import styles from './styles';

function BinaryInput(props) {
    return (
        <div style = {styles.TextInputContainerStyle}>
            <div style = {{display : 'flex', flexDirection : 'row'}}>
                {props.TextInputLabel}
                <div style = {{color : 'red'}}>
                    *
                </div>
            </div>
            <div style = {styles.RadioInputBox}>
                <input
                    onClick = {(event) => props.onClick(1)}
                    checked = {
                        props.value
                    }
                    type ="radio"
                    style = {styles.radioStyle}/>
                <div style = {styles.radioLabelStyle}>
                    Yes
                </div>
            </div>
            <div style = {styles.RadioInputBox}>
                <input
                    onClick = {(event) => props.onClick(0)}
                    checked = {
                        props.value === null || props.value === 1 ?
                        false :
                        !props.value
                    }
                    type ="radio"
                    style = {styles.radioStyle}/>
                <div style = {styles.radioLabelStyle}>
                    No
                </div>
            </div>
        </div>
    )
}

export default BinaryInput