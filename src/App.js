import React from 'react';
import { Header, FormBody } from './Components';
import {useSelector, useDispatch} from 'react-redux';
import {NextAction} from './Actions';

function App() {
  const FormReducer = useSelector(state => state.FormReducer)
  const dispatch = useDispatch();
  return (
    <div>
      <Header/>
      <FormBody
        onClickNext = {(payLoad) => {
          dispatch(NextAction(payLoad))
          alert("Successfully Validated !!! :)\nWelcome to Camino Financial!")
        }}/>
    </div>
  );
}

export default App;
