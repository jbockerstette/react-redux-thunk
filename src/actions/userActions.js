const usersActionTypes = {
  USERS_HAS_ERRORED: 'USERS_HAS_ERRORED',
  USERS_LOADING: 'USERS_LOADING',
  USERS_FETCH_SUCCESS: 'USERS_FETCH_SUCCESS'
};

export function usersHasErrored(errored) {
  return {
    type: usersActionTypes.USERS_HAS_ERRORED,
    hasErrored: errored
  };
}

export function usersIsLoading(loading) {
  return {
    type: usersActionTypes.USERS_LOADING,
    isLoading: loading
  };
}

export function usersFetchSuccess(users) {
  return {
    type: usersActionTypes.USERS_FETCH_SUCCESS,
    users
  };
}

export function usersFetchData(url) {
  return async dispatch => {
    dispatch(usersIsLoading(true));
    try {
      const response = await fetch(url);
      dispatch(usersIsLoading(false));
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const users = await response.json();
      dispatch(usersFetchSuccess(users));
    } catch (error) {
      dispatch(usersIsLoading(false));
      dispatch(usersHasErrored(true));
    }
  };
}

export default usersActionTypes;
