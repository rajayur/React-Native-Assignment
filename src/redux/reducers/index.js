import { combineReducers } from 'redux';

import data from './data/data.reducer';
import user from './user/user.reducer';

const appReducer = combineReducers({ data, user });

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
