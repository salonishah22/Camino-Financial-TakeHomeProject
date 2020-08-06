import React from 'react';
import styles from './styles';
import { TextInput, BinaryInput, DropdownInput } from '../InputComponents';

function FormOneBody(props) {
   return(
       <div style = {styles.FormOneBodyContainer}>
           <div style = {{fontSize : 18, fontFamily : "sans-serif"}}>
            Tell us a little bit about yourself and your business loan needs
            <div style = {{color : "red", marginTop : 8}}>
                * required
            </div>
           </div>
           <TextInput
                onClick = {(value) => props.updateState({
                    firstName : value
                })}
                TextInputLabel = {"First Name"}/>
            <TextInput
                onClick = {(value) => props.updateState({
                    lastName : value
                })}
                TextInputLabel = {"Last Name"}/>
            <TextInput
                onClick = {(value) => props.updateState({
                    bestContactEmail : value
                })}
                TextInputLabel = {"Best contact Email"}/>
            <TextInput
                onClick = {(value) => props.updateState({
                    mobileNumber : value
                })}
                TextInputLabel = {"Mobile Phone Number"}/>
            <BinaryInput
                value = {props.FormState.ownBusiness}
                onClick = {(value) => props.updateState({
                    ownBusiness : value
                })}
                TextInputLabel = {"Do you own a business?"}/>
            <TextInput
                onClick = {(value) => props.updateState({
                    businessName : value
                })}
                TextInputLabel = {"Business Name"}/>
            <TextInput
                onClick = {(value) => props.updateState({
                    desiredLoanAmt : value
                })}
                TextInputLabel = {"Desired Loan Amount"}
            />
            <DropdownInput
                value = {props.FormState.loanType}
                onClick = {(value) => props.updateState({
                    loanType : value
                })}
                TextInputLabel = {"Purpose of Loan"}
            />
            <BinaryInput
                onClick = {(value) => props.updateState({
                    inBusinessNineMonths : value
                })}
                value = {props.FormState.inBusinessNineMonths}
                TextInputLabel = {"Have you been in business for atleast 9 months?"}
            />
       </div>
   )
}

export default FormOneBody;