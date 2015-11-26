import {pushState} from 'redux-router';
import {encode} from '../utilities/DateUtilities';

import {resetAddFoodForm} from './AddFoodFormActions';

export const ROUTER_ANIMATION = 'ROUTER_ANIMATION';

function goto(page, routerAnimation = 'none'){
  return (dispatch) => {
      dispatch({type: ROUTER_ANIMATION, routerAnimation});
      dispatch(pushState(null, page));
  };
}

export function gotoAddFood(date, routerAnimation){
  return (dispatch) => {
    dispatch(resetAddFoodForm())
    dispatch(goto("/add-food/" + encode(date), routerAnimation));
  };
}

export function gotoDashboard(date, routerAnimation){
  return goto("/dashboard/" + encode(date), routerAnimation);
}
