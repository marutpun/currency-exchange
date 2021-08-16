export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_TIME = 'SET_TIME';

export const initialState = {
  country: 'sgd',
  exchangeRate: 0,
  time: '',
  isLoading: false,
  isError: false,
};

export default function currencyReducer(state, action) {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, isLoading: true, isError: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        exchangeRate: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CHANGE_COUNTRY:
      return { ...state, country: action.payload };

    case SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export function fetchInit() {
  return {
    type: FETCH_INIT,
  };
}

export function fetchSuccess(newRate) {
  return {
    type: FETCH_SUCCESS,
    payload: newRate,
  };
}

export function fetchFailure() {
  return {
    type: FETCH_FAILURE,
  };
}

export function changeCountry(newCountry) {
  return {
    type: CHANGE_COUNTRY,
    payload: newCountry,
  };
}

export function updateTime(date) {
  return {
    type: SET_TIME,
    payload: date,
  };
}
