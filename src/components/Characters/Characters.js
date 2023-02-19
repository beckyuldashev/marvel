import { getDataApi } from '../../utils/getDataApi';
import { IMG_SIZES } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';

import classes from './Characters.css';
import Notification from '../Notification';


class Characters {
  renderContent(data) {
    let htmlContent = '';
    
    data.forEach(({ name, thumbnail: {path, extension} }) => {
      const imgSrc = path + '/' + IMG_SIZES.fantastic + '.' + extension;
      
      htmlContent += `
        <li class="${classes.characters__item}">
          <img class="img-cover ${classes.characters__img}" src="${imgSrc}">
          <h4 class="${classes.characters__name}">${name}</h4>
        </li>
      `;
    })

    const htmlWrapper = `
      <div class="modal-overlay ${classes.characters__container}">
        <ul class="${classes.characters__list}">
          ${htmlContent}
        </ul>

        <button class="btn bg-contain modal-close ${classes.characters__close}"></button>
      </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }


  async render(uri) {
    const data = await getDataApi.getData(uri);
    
    data.length ? this.renderContent(data) : Notification.render();
  }
}

export default new Characters();