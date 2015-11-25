import {ON_SEARCH_TERM_CHANGES} from '../../actions/SearchFoodActions';
import {ADD_FOOD, RESET_ADD_FOOD_FORM} from '../../actions/AddFoodFormActions'

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
