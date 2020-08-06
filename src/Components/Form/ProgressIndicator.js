import React from 'react';
import styles from './styles';

function Progbar(props) {
    return(
        <div
            style = {
                    props.active ?
                    styles.ActiveDivBar :
                    styles.DivBar
                }>
        </div>
    )
}
function ProgressIndicator(props) {
    const st = []
    for (let index = 1; index <= props.totalSteps; index++) {
       if ( props.step === index ) {

            st.push(<Progbar active = {true}/>)
       } else {

           st.push(<Progbar/>)
       }
    }
    return(
        <div style = {styles.progressContainer}>
            <div>
                Step {props.step} of {props.totalSteps}
            </div>
            <div style = {{ display : "flex", marginTop : 4}}>
                {st}
            </div>
        </div>
    )
}

export default ProgressIndicator;