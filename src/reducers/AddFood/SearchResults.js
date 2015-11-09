import {ON_SEARCH_COMPLETED, ON_SEARCH_TERM_CHANGES} from '../../actions/SearchFoodAction';

export default function searchTermReducer(searchResults = null, action){
  switch (action.type) {
    case ON_SEARCH_TERM_CHANGES:
      return null;
    case ON_SEARCH_COMPLETED:
      return action.searchResults;
    default:
      return searchResults;
  }
}
