import { ROUTER_ANIMATION } from '../actions/NavigationActions';

export default function routerAnimation(state="", action){
  switch (action.type) {
    case ROUTER_ANIMATION:
      return action.routerAnimation;
    default:
      return state;
  }
}
