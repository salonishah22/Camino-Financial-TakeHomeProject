const styles = {
    formBodyContainer : {
        display : "flex",
        flexDirection : "column",
        backgroundColor : "#dcdcdc"
    },
    stepHeaderContainer : {
        display : "flex",
        flex : 1,
        flexDirection : "row",
        color : 'black',
        fontSize : 12,
        fontFamily : 'sans-serif',
        padding : 12,
        alignItems : "center"
    },
    DivBar : {
        marginRight : 4,
        width : 15,
        height : 3,
        border : "0.2px solid grey",
        backgroundColor : "#696969"
    },
    ActiveDivBar : {
        marginRight : 4,
        width : 15,
        height : 3,
        border : "0.2px solid grey",
        backgroundColor : "skyblue"
    },
    progressContainer : {
        display : "flex",
        flex : 1,
        justifyContent : "flex-end",
        alignItems : 'flex-end',
        flexDirection : "column",
        alignSelf : "flex-end",
        fontSize : 11
    },
    FormOneBodyContainer : {
        display : "flex",
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        borderTop : "0.2px solid grey",
        paddingRight : 50,
        paddingLeft : 200,
        paddingTop : 50,
        paddingBottom : 50,
    },
    NextButtonContainer : {
        marginBottom : 50,
        width : 305,
        height : 27,
        marginLeft : 200,
        alignItems : 'center',
        justifyContent : "center",
        backgroundColor : "skyblue",
        border : "0.2px solid grey",
        borderRadius : 4,
        color : "white"
    }
}

export default styles;