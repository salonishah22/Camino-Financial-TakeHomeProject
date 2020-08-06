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
        height : 60,
        width : 60
    },
    companyNameContainer : {
        fontSize : 20,
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
        width : 80,
        height : 30,
        color : 'white',
        backgroundColor : 'transparent',
        fontSize : 12,
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
        top :95,
        border : "0.2px solid grey",
        width : 80,
        height : 35,
        color : 'white',
        backgroundColor : '#1b3b43',
        fontSize : 18,
        fontFamily : 'sans-serif',
        justifyContent : 'center',
        flexDirection : 'row',
        display : "flex",
        alignItems : 'center',
        borderRadius : 8
    },
    showHelpContainer : {
        display : "flex",
        flex : 1,
        flexDirection : 'column',
        padding : 25,
        fontSize : 18
    },
    helpButtonActionContainer : {
        marginTop : 8,
        display : "flex",
        flexDirection : "row",
        flex : 1,
        justifyContent : 'space-around',
    },
    helpButtonActionStyle : {
        marginRight : 8,
        backgroundColor : 'transparent',
        border : "0.2px solid white",
        borderRadius : 3,
        height : 40,
        color : "white",
        display : "flex",
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
}
export default styles