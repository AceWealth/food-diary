import { gotoDashboard } from './NavigationActions';
import DiaryEntry from '../models/DiaryEntry';
import DateUtilities from '../utilities/DateUtilities';

export function addFood(targetDate, selectedPeriod, foodItem) {
  return (dispatch) => {
    dispatch(addFoodAction(targetDate, selectedPeriod, foodItem))
    dispatch(gotoDashboard(targetDate, "slideDown"))
  };
};

export const ADD_FOOD = "ADD_FOOD";
export function addFoodAction(targetDate, selectedPeriod, foodItem){
  return {
    type: ADD_FOOD,
    diaryEntry: new DiaryEntry(+DateUtilities.now(), foodItem.name, targetDate, selectedPeriod)
  }
};

export const CHANGE_SELECTED_PERIOD = "CHANGE_SELECTED_PERIOD";
export function changeSelectedPeriod(selectedPeriod){
  return {
    type: CHANGE_SELECTED_PERIOD,
    selectedPeriod
  }
};

export const RESET_ADD_FOOD_FORM = "RESET_ADD_FOOD_FORM";
export function resetAddFoodForm(){
  return {type: RESET_ADD_FOOD_FORM};
}
