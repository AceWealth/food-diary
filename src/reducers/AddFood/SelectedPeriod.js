import { CHANGE_SELECTED_PERIOD, RESET_ADD_FOOD_FORM} from '../../actions/AddFoodFormActions';

export default function selectedPeriodReducer(state = "", action){
  switch (action.type) {
    case RESET_ADD_FOOD_FORM:
      return "";
    case CHANGE_SELECTED_PERIOD:
      return action.selectedPeriod;
    default:
      return state;
  }
}
