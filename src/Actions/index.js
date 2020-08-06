export const ShowHelpAction = () => {
    return{
        type : "Hide"
    }
}

export const HideHelpAction = () => {
    return{
        type : "Help"
    }
}

export const ToggleLanguageAction = () => {
    return{
        type : "ToggleLanguage"
    }
}

export const NextAction = (payLoad) => {
    return{
        type : "Next",
        payLoad : payLoad
    }
}