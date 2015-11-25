import FormState from '../../models/AddFoodFormState.js';
import { RESET_ADD_FOOD_FORM, CHANGE_SELECTED_PERIOD } from '../../actions/AddFoodFormActions';

export default function formState(state = FormState.SELECT_TIME, action){
  switch (action.type){
    case RESET_ADD_FOOD_FORM:
      return FormState.SELECT_TIME;
    case CHANGE_SELECTED_PERIOD:
      return FormState.SELECT_FOOD;
    default:
      return state;
  }
};
