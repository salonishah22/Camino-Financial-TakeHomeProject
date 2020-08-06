import React from 'react';
import StepHeader from './FormHeader';
import StepBody from './FormOneBody';
import { NextButton } from '../Button';
import styles from './styles';

class FormBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            FormState : {
                firstName : "",
                lastName : "",
                bestContactEmail : "",
                mobileNumber : "",
                ownBusiness : 1,
                businessName : "",
                desiredLoanAmt : "",
                loanType : "1",
                inBusinessNineMonths : null  
            }
        }
    }
    validateInput(params) {
        var { 
            firstName,
            lastName,
            bestContactEmail,
            mobileNumber,
            ownBusiness,
            businessName,
            desiredLoanAmt,
            loanType,
            inBusinessNineMonths
        } = this.state.FormState
        var error = "";
        if ( firstName === "") {
            error += "First Name is required" + "\n"
        }
        if ( lastName === "") {
            error += "Last Name is required" + "\n"
        }
        if ( bestContactEmail === "") {
            error += "Best Contact Email is required" + "\n"
        } else if ( !( /\S+@\S+\.\S+/.test(bestContactEmail)) ) {
            error += "Email format is wrong";
        }
        if ( mobileNumber === "") {
            error += "Mobile Number is required" + "\n";
        } else if (!(/^\d+$/.test( mobileNumber))) {
            error += "Mobile Number format wrong" + "\n";
        }
        if ( ownBusiness === "") {
            error += "Is Own Business is required" + "\n"
        }
        if ( businessName === "") {
            error += "Business Name is required" + "\n"
        }
        if ( desiredLoanAmt === "") {
            error += "Desired Loan Amount is required" + "\n"
        }else if (!(/^\d+$/.test( desiredLoanAmt))) {
            error += "Desired loan Amount format wrong" + "\n";
        }
        if ( loanType === "1") {
            error += "Loan Type is required" + "\n"
        }
        if ( inBusinessNineMonths === null) {
            error += "Is in business in nine months is required" + "\n"
        }
        if ( error != "") {
            alert(error)
            return false;
        }
        return true;
    }
    render() {
       
        return(
            <div style = { styles.formBodyContainer }>
                <StepHeader />
                <StepBody
                    FormState = {this.state.FormState}
                    updateState = {(value) => {
                        console.log("Value:", value)
                        console.log("New Value: ", this.state)
                        this.setState({
                            FormState : {
                                ...this.state.FormState,
                                ...value
                            }
                        })
                    }}
                />
                <NextButton
                    style = {styles.NextButtonContainer}
                    onClick = {() => {
                        this.validateInput()
                        ? this.props.onClickNext(this.state.FormState)
                        : console.log("Validation not succesfull")
                    }}
                    buttonText = {"NEXT"}
                />
            </div>
        )
    }
}
export default FormBody;