const styles = {
    headerContainer : {
        display : "flex",
        flex : 1,
        flexDirection : 'column',
        backgroundColor : "#1b3b43"
    },
    topHeaderContainer : {
        display : "flex",
        flexDirection : 'row',
        padding : 12,
        backgroundColor : "#1b3b43"
    },
    logoContainer : {
        height : 40,
        width : 35
    },
    companyNameContainer : {
        fontSize : 14,
        fontFamily : "sans-serif",
        alignSelf : 'center',
        color : 'white'
    },
    languageButtonContainer : {
        display : 'flex',
        flex : 1,
        backgroundColor : "transparent",
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    languageButton : {
        border : "0.2px solid grey",
        width : 60,
        height : 20,
        color : 'white',
        backgroundColor : 'transparent',
        fontSize : 8,
        fontFamily : 'sans-serif'
    },
    helpBarContainer : {
        display : 'flex',
        flex : 1,
        flexDirection : 'column',
        backgroundColor : 'transparent',
        height : 20,
        borderTop : "0.2px solid grey",
        marginTop : 20,
        alignItems : 'center',
        fontFamily : "sans-serif",
        fontSize : 14,
        color : "white",
        paddingBottom : 40
    },
    helpButtonContainer : {
        position : 'absolute',
        right : 12,
        top :78,
        border : "0.2px solid grey",
        width : 60,
        height : 20,
        color : 'white',
        backgroundColor : '#1b3b43',
        fontSize : 8,
        fontFamily : 'sans-serif',
        justifyContent : 'center',
        flexDirection : 'row',
        display : "flex",
        alignItems : 'center'
    },
    showHelpContainer : {
        display : "flex",
        flex : 1,
        flexDirection : 'column',
        padding : 25
    },
    helpButtonActionContainer : {
        marginTop : 8,
        display : "flex",
        flexDirection : "row",
        flex : 1,
        justifyContent : 'space-around',
    },
    helpButtonActionStyle : {
        marginRight : 4,
        backgroundColor : 'transparent',
        border : "0.2px solid white",
        borderRadius : 3,
        height : 25,
        color : "white",
        display : "flex",
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
}
export default styles