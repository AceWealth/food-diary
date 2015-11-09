import { CHANGE_SELECTED_PERIOD } from '../../actions/FoodDiaryActions';
import Period from '../../models/Period';

export default function selectedPeriodReducer(state = Period[0].value, action){
  switch (action.type) {
    case CHANGE_SELECTED_PERIOD:
      return action.selectedPeriod;
    default:
      return state;
  }
}
