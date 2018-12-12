import { combineReducers } from 'redux';
import  ReducerNew  from './reducer_news';

const rootReducer = combineReducers({
  news : ReducerNew
});

export default rootReducer;
