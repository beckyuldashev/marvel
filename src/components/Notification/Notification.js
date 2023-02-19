import { ROOT_MODAL } from '../../constants/root';
import classes from './Notification.css';

class Notification {
  render() {
    const htmlWrapper = `
      <div class="${classes.notification__container}">
        <span class="${classes.notification__text}">Нет данных по этому комиксу</span>

        <button class="btn bg-contain modal-close ${classes.notification__close}"></button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }
}

export default new Notification();