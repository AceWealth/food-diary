import { pushState } from 'redux-router';

export const goto = (page) => pushState(null, page)
