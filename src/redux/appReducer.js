import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR } from "./types";

const initialState = {
  loading: false,
  isError: null,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: null
      }
    default: return state;
  }
}
