import { bindActionCreators } from 'redux';
import _ from 'lodash';

export default function bindActions(actionGroups) {
  return (dispatch) => _.mapValues(actionGroups, (actionGroup) =>
    bindActionCreators(actionGroup, dispatch));
}
