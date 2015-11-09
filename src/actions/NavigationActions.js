import { pushState } from 'redux-router';
import {encode} from '../utilities/DateUtilities';

function goto(page){ return pushState(null, page); }

export function gotoAddFood(date){ return goto("/add-food/" + encode(date)); }
export function gotoDashboard(date){
  return goto("/dashboard/" + encode(date));
}
