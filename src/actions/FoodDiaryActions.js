import { goto } from './NavigationActions';
import { pushState } from 'redux-router';

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
    diaryEntry: Object.assign({timestamp: new Date()}, foodItem)
  }
}
