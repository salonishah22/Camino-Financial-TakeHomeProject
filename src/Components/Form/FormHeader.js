import React from 'react';
import ProgressIndicator from "./ProgressIndicator";
import styles from './styles';

function StepHeader() {
    return(
        <div style = { styles.stepHeaderContainer }>
            Step 1: &nbsp;<b>
            Basic Information
            </b>
            <ProgressIndicator
                step = {1}
                totalSteps = {3}
            />
        </div>
    )
}

export default StepHeader;