import usersActionTypes from '../actions/userActions';

export function usersHasErrored(state = false, action) {
  switch (action.type) {
    case usersActionTypes.USERS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case usersActionTypes.USERS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export default function users(state = [], action) {
  switch (action.type) {
    case usersActionTypes.USERS_FETCH_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
