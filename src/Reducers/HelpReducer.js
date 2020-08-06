const HelpReducer = (state = "Hide", action) => {

    switch(action.type) {
        case "Hide" :
            return "Help"
        case "Help" :
            return "Hide"
        default :
            return "Hide"
    }
}

export default HelpReducer;