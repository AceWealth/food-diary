import { expect } from 'chai';

import reducer from '../../src/reducers/RouterAnimation';

import {ROUTER_ANIMATION} from '../../src/actions/NavigationActions';

describe('RouterAnimation', () => {
  it('should have a default value', () => {
    const newState = reducer(undefined, {});
    expect(newState).to.equal("");
  });

  it('should retain the state otherwise', () => {
    const newState = reducer("foo", {type: "randomAction"});
    expect(newState).to.equal("foo");
  });

  it('should change it\'s value on a specific action', () => {
    const newState = reducer("foo", {type: ROUTER_ANIMATION, routerAnimation: "routerAnimationKlass"});
    expect(newState).to.equal("routerAnimationKlass");
  });
});
