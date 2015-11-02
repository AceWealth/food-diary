import { goto } from './NavigationActions';
import { assign } from '../utilities/extendedLodash';

export const ADD_FOOD = "ADD_FOOD";

export function addFood(foodItem) {
  return (dispatch) => {
    dispatch(addFoodAction(foodItem))
    dispatch(goto('/'))
  };
};

function addFoodAction(foodItem){
  return {
    type: ADD_FOOD,
    diaryEntry: assign(foodItem, {timestamp: new Date()})
  }
}
