import { expect } from 'chai';
import sinon from 'sinon';

import reducer from '../../src/reducers/DiaryEntries';

import {addFoodAction} from '../../src/actions/AddFoodFormActions';

import DateUtilities from '../../src/utilities/DateUtilities';

describe('DiaryEntries', () => {
  const mockTimestamp = new Date("2014-02-24");

  beforeEach(function () {
    sinon.stub(DateUtilities, 'now').returns(mockTimestamp);
  });

  afterEach(function () {
    DateUtilities.now.restore();
  });

  it('should have a default value', () => {
    const newState = reducer(undefined, {});
    expect(newState).to.deep.equal([]);
  });

  it('should retain the state otherwise', () => {
    const newState = reducer([1], {type: "randomAction"});
    expect(newState).to.deep.equal([1]);
  });

  it('should add a new DiaryEntry with current timestamp as ID on addFoodAction', () => {
    const newState = reducer(['previousEntry'], addFoodAction("targetDate", "selectedPeriod", { name: "foodName"}));
    expect(newState).to.deep.equal(['previousEntry', {
        date: "targetDate",
        id: +mockTimestamp,
        name: "foodName",
        period: "selectedPeriod"
      }]);
  });
});
