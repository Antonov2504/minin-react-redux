import { showError } from "./actions";
import { CREATE_POST } from "./types";

const forbiddenWords = ['fuck', 'spam', 'php'];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter(word => action.payload.title.includes(word));
        if (found.length) {
          dispatch(showError('Вы спамер. Мы вас не звали, идите домой'));
        }
      }
      return next(action);
    }
  }
}
