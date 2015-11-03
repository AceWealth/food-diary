import { goto } from './NavigationActions';
import DiaryEntry from '../models/DiaryEntry';

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
    diaryEntry: new DiaryEntry(foodItem.name, new Date())
  }
}
