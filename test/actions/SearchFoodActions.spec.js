import mockStore from '../mockStore';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import jquery from 'jquery';

import * as actions from '../../src/actions/SearchFoodActions';

describe('SearchFoodActions', () => {
  describe('onSearchCompleted', () => {
    it('should returns an action object', () => {
      expect(actions.onSearchCompleted('searchResults')).to
          .deep.equal({ type: actions.ON_SEARCH_COMPLETED, searchResults: 'searchResults'});
    });
  });

  describe('onSearchFailed', () => {
    it('should returns an action object', () => {
      expect(actions.onSearchFailed()).to
          .deep.equal({ type: actions.ON_SEARCH_FAILED});
    });
  });

  describe('onSearchTermChanges', () => {
    it('should returns an action object', () => {
      expect(actions.onSearchTermChanges('searchTerm')).to
          .deep.equal({ type: actions.ON_SEARCH_TERM_CHANGES, searchTerm: 'searchTerm'});
    });
  });

  describe('onSearch', () => {
    beforeEach(() => {
      // TODO: find out why jQuery doesn't has the get method when imported in npm / mocha ( but it works on browser )
      // So that we can stub the method, we set the method to noop
      jquery.get = () => {};
      sinon.stub(jquery, 'get')
    });

    afterEach(() => {
      jquery.get.restore();
    });

    it('should do a get request to the correct url', () => {
      jquery.get.returns(Promise.resolve());

      actions.onSearch('searchTerm')(() => {})

      const baseURL = "https://test.holmusk.com/food/search?q=";
      expect(jquery.get).to.have.been.calledWith(baseURL + 'searchTerm');
    });

    it('should dispatch a certain action on success', (done) => {
      jquery.get.returns(Promise.resolve('searchResults'));

      const expectedActions = [actions.onSearchCompleted('searchResults')];
      mockStore({}, expectedActions, done).dispatch(actions.onSearch('searchTerm'))
    });

    it('should dispatch a certain action on failure', (done) => {
      jquery.get.returns(Promise.reject());

      const expectedActions = [actions.onSearchFailed()];
      mockStore({}, expectedActions, done).dispatch(actions.onSearch('searchTerm'))
    });
  });
});

