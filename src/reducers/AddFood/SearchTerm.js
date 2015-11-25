import {ON_SEARCH_TERM_CHANGES, RESET_ADD_FOOD_FORM} from '../../actions/SearchFoodActions';
import {ADD_FOOD} from '../../actions/FoodDiaryActions'

export default function searchTermReducer(searchTerm = "", action){
  switch (action.type) {
    case RESET_ADD_FOOD_FORM:
    case ADD_FOOD:
      return "";
    case ON_SEARCH_TERM_CHANGES:
      return action.searchTerm;
    default:
      return searchTerm;
  }
}
