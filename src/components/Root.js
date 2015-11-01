import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchFormAction from '../actions/SearchFormAction';
import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    SearchFormAction: bindActionCreators(SearchFormAction, dispatch)
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
