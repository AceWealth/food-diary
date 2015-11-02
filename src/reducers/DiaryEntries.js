import {ADD_FOOD} from '../actions/FoodDiaryActions'
import {push} from '../utilities/extendedLodash';

export default function diaryEntriesReducer(diaryEntries = [], action){
  switch (action.type) {
    case ADD_FOOD:
      return push(diaryEntries, action.diaryEntry);
    default:
      return diaryEntries;
  }
}
