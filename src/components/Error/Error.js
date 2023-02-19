import { ROOT_INDEX } from '../../constants/root';

import classes from './Error.css';

class Error {
  render() {
    const htmlWrapper = `
      <div class="${classes.error__container}">
        <div class="${classes.error__content}">
          <p class="${classes.error__text}">Произошла ошибка!</p>
          <p class="${classes.error__text}">Попробуйте зайти попозже</p>
        </div>
      </div>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();