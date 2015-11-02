import {ON_SEARCH_TERM_CHANGES} from '../actions/AddFoodActions';
import {ADD_FOOD} from '../actions/FoodDiaryActions'

export default function searchTermReducer(searchTerm = "", action){
  switch (action.type) {
    case ADD_FOOD:
      return "";
    case ON_SEARCH_TERM_CHANGES:
      return action.searchTerm;
    default:
      return searchTerm;
  }
}
