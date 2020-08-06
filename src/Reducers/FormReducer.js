const initialState = {
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
const FormReducer = (state = initialState, action) => {

    switch(action.type) {
        case "Next" :
            state = action.payLoad
            return {
                ...state
            }
        default :
            return state
    }
}

export default FormReducer