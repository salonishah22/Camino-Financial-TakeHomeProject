import React from 'react';
import styles from './styles';
import companyLogo from '../../Images/companyLogo.png';
import { LanguageButton } from "../Button";
import HelpBar from './HelpBar';
import {useSelector, useDispatch} from 'react-redux';
import {ToggleLanguageAction} from '../../Actions';

function Header(props) {
    
    const language = useSelector(state => state.LanguageReducer)
    const dispatch = useDispatch();
    return (
        <div style = {styles.headerContainer}>
            <div style = {styles.topHeaderContainer}>
                <div>
                    <img
                        style = {styles.logoContainer}
                        src = {companyLogo} />
                </div>
                <div style = {styles.companyNameContainer}>
                    <div>
                        <b>
                            CAMINO
                        </b>
                    </div>
                    <div style = {{fontSize : 14}}>
                        FINANCIAL
                    </div>
                </div>
                <div style = {styles.languageButtonContainer}>
                    <LanguageButton
                        onClick = {() => { dispatch(ToggleLanguageAction())}}
                        buttonText = {language}
                        style = {styles.languageButton}/>
                </div>
            </div>
            <HelpBar/>
        </div>
    )
}

export default Header