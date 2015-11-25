import { expect } from 'chai';

import reducer from '../../src/reducers/AddFood/';

import {onSearchTermChanges, onSearchCompleted } from '../../src/actions/SearchFoodActions';
import {resetAddFoodForm, changeSelectedPeriod} from '../../src/actions/AddFoodFormActions';

import FormState from '../../src/models/AddFoodFormState.js';

// ** start excuses **
// Yes, there's duplication
// Some of the basic cases that I observe:
// * reducer should have initial state
// * reducer should retain its state given ignored action
// * reducer should change its state given a specific state
// Would refactor into some test helper method once I get more familiar with this architecture.
// ** end excuses **

describe('AddFood reducer', () => {
  describe('searchTerm', () => {
    it('should have a default value', () => {
      const newState = reducer({}, {});
      expect(newState.searchTerm).to.equal("");
    });

    it('should retain the state otherwise', () => {
      const newState = reducer({searchTerm: "foo"}, {type: "randomAction"});
      expect(newState.searchTerm).to.equal("foo");
    });

    it('should change it\'s value on a specific action', () => {
      const newState = reducer({searchTerm: "foo"}, onSearchTermChanges("newSearchTerm"));
      expect(newState.searchTerm).to.equal("newSearchTerm");
    });

    it('should clear it\'s value on resetAddFoodForm',  () => {
      const newState = reducer({searchTerm: "foo"}, resetAddFoodForm());
      expect(newState.searchTerm).to.equal("");
    });
  });

  describe('searchResults', function () {
    it('should have a default value', () => {
      const newState = reducer({}, {});
      expect(newState.searchResults).to.equal(null);
    });

    it('should retain the state otherwise', () => {
      const newState = reducer({searchResults: "foo"}, {type: "randomAction"});
      expect(newState.searchResults).to.equal("foo");
    });

    it('should change it\'s value on a specific action', () => {
      const newState = reducer({searchResults: "foo"}, onSearchCompleted("searchResults"));
      expect(newState.searchResults).to.equal("searchResults");
    });
  });

  describe('selectedPeriod', function () {
    it('should have a default value', () => {
      const newState = reducer({}, {});
      expect(newState.selectedPeriod).to.equal("");
    });

    it('should retain the state otherwise', () => {
      const newState = reducer({selectedPeriod: "foo"}, {type: "randomAction"});
      expect(newState.selectedPeriod).to.equal("foo");
    });

    it('should change it\'s value on a specific action', () => {
      const newState = reducer({selectedPeriod: "foo"}, changeSelectedPeriod("selectedPeriod"));
      expect(newState.selectedPeriod).to.equal("selectedPeriod");
    });
  });

  describe('formState', function () {
    it('should have a default value', () => {
      const newState = reducer({}, {});
      expect(newState.formState).to.equal(FormState.SELECT_TIME);
    });

    it('should retain the state otherwise', () => {
      const newState = reducer({formState: FormState.SELECT_FOOD}, {type: "randomAction"});
      expect(newState.formState).to.equal(FormState.SELECT_FOOD);
    });

    it('should change to SELECT_TIME on resetAddFoodForm', () => {
      const newState = reducer({formState: FormState.SELECT_FOOD}, resetAddFoodForm());
      expect(newState.formState).to.equal(FormState.SELECT_TIME);
    });

    it('should change to SELECT_FOOD on changeSelectedPeriod', () => {
      const newState = reducer({formState: FormState.SELECT_TIME}, changeSelectedPeriod(""));
      expect(newState.formState).to.equal(FormState.SELECT_FOOD);
    });
  });
});
