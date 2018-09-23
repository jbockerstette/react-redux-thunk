/* eslint object-shorthand: 0 */

import { combineReducers } from 'redux';
import users, { usersHasErrored, usersIsLoading } from './userReducers';

/**
This method will build our redux shape. I disabled the eslint object-shorthand 
because it is more obvious that the redux shape looks like this.
*/
export default combineReducers({
  users: users,
  usersHasErrored: usersHasErrored,
  usersIsLoading: usersIsLoading
});
