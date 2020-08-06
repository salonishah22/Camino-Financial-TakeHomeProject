const LangaugeReducer = (state = "ESPANOL", action) => {

    switch(action.type) {
        case "ToggleLanguage" :
            if ( state === "ESPANOL") {
                return "ENGLISH"
            } else {
                return "ESPANOL"
            }
        default :
        return "ESPANOL"
    }
}

export default LangaugeReducer;