import React from 'react';
import styles from './styles';

function DropdownInput(props) {
    return (
        <div style = {styles.TextInputContainerStyle}>
            <div style = {{display : 'flex', flexDirection : 'row'}}>
                {props.TextInputLabel}
                <div style = {{color : 'red'}}>
                    *
                </div>
            </div>
            <select
                onChange = {(event) => { props.onClick(event.target.value)}}
                value = {props.value}
                style = {styles.selectBoxStyle}>
                <option value = "1" disabled>
                    Select
                </option>
                <option value = "2">
                    Car Loan
                </option>
                <option value = "3">
                    Education Loan
                </option>
            </select>
        </div>
    )
}

export default DropdownInput;