import { CHANGE_SELECTED_PERIOD } from '../../actions/FoodDiaryActions';

export default function selectedPeriodReducer(state = "", action){
  switch (action.type) {
    case CHANGE_SELECTED_PERIOD:
      return action.selectedPeriod;
    default:
      return state;
  }
}
