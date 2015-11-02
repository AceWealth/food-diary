import { bindActionCreators } from 'redux';
import _ from './extendedLodash';

export default function bindActions(actionGroups) {
  return (dispatch) => _.mapValues(actionGroups, (actionGroup) =>
    bindActionCreators(actionGroup, dispatch));
}
