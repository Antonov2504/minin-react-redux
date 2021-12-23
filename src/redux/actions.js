import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER, SHOW_ERROR, HIDE_ERROR } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showError(message) {
  return dispatch => {
    dispatch({
      type: SHOW_ERROR,
      payload: message
    });
    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR
  }
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (response.ok) {
        const json = await response.json();
        console.log(response);
        setTimeout(() => {
          dispatch({ type: FETCH_POST, payload: json });
          dispatch(hideLoader());
        }, 1000);
      } else {
        throw new Error();
      }
    } catch (e) {
      dispatch(showError('Что-то пошло не так...'));
      dispatch(hideLoader());
    }
  }
}
