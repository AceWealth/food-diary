import {mockStore, testSimpleAction} from '../TestHelper';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

import jquery from 'jquery';

import * as actions from '../../src/actions/AddFoodFormActions';
import * as navigationActions from '../../src/actions/NavigationActions';

describe('AddFoodFormActions', () => {
  testSimpleAction('changeSelectedPeriod',
                    actions.changeSelectedPeriod('selectedPeriod'),
                    { type: actions.CHANGE_SELECTED_PERIOD,
                      selectedPeriod: 'selectedPeriod'})

  testSimpleAction('resetAddFoodForm',
                    actions.resetAddFoodForm(),
                    { type: actions.RESET_ADD_FOOD_FORM});

  testSimpleAction('addFoodAction',
                    actions.addFoodAction('targetDate', 'selectedPeriod', { name: "foodName" }),
                    { type: actions.ADD_FOOD,
                      diaryEntry: {
                        date: "targetDate",
                        id: +new Date(), // TODO: Stub this value
                        name: "foodName",
                        period: "selectedPeriod"
                      }
                    });

  describe('addFood', () => {
    it('should dispatch multiple action', (done) => {
      sinon.stub(navigationActions, 'gotoDashboard').returns('navigationActions.gotoDashboard')

      const foodItem = { name: 'foodName' };
      const expectedActions = [
        actions.addFoodAction('targetDate', 'selectedPeriod', foodItem),
        'navigationActions.gotoDashboard'
      ];

      mockStore({}, expectedActions, done).dispatch(actions.addFood('targetDate', 'selectedPeriod', foodItem))

      navigationActions.gotoDashboard.restore();
    });
  });
});

