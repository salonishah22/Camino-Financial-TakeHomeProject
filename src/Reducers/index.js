import FormReducer from './FormReducer';
import HelpReducer from './HelpReducer';
import LanguageReducer from './LanguageReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    FormReducer :  FormReducer,
    HelpReducer : HelpReducer,
    LanguageReducer : LanguageReducer
})

export default allReducers;