import { NEWS_SELECT } from '../actions/index';

export default function(state = [] ,action){

  switch(action.type){
    case NEWS_SELECT :
      return [action.payload.data,...state];
  }
  return state;
}
