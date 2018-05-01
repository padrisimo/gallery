import { combineReducers } from 'redux';
import picsReducer from './picsReducer';

const rootReducer = combineReducers({
  pics: picsReducer
});

export default rootReducer;