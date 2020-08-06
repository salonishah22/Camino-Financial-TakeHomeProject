import React from 'react';
import styles from './styles';
import { HelpButton, HelpActionButton } from "../Button";
import {useSelector, useDispatch} from 'react-redux';
import {ShowHelpAction, HideHelpAction} from '../../Actions';

function HelpBar(props) {
    const isShowHelp = useSelector(state => state.HelpReducer);
    const dispatch = useDispatch();

    return (
        <div style = {styles.helpBarContainer}>
            <HelpButton
                onClick = {() =>
                    isShowHelp === "Help" ?
                    dispatch(HideHelpAction()):
                    dispatch(ShowHelpAction())
                }
                buttonText = {isShowHelp === "Help" ? "" : "Help"}
                style = {styles.helpButtonContainer}/>
            {
                isShowHelp === "Hide" ?
                <div/> 
                :
                <div style = {styles.showHelpContainer}>
                    <div>
                        Need Help? Call or Chat with us directly
                    </div>
                    <div style = {styles.helpButtonActionContainer}>
                        <HelpActionButton
                            buttonText = {"CALL"}
                            style = {styles.helpButtonActionStyle}/>
                        <HelpActionButton
                            buttonText = {"EMAIL"}
                            style = {styles.helpButtonActionStyle}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default HelpBar;