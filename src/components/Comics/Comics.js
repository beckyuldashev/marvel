import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_SIZES, IMAGE_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX, ROOT_MODAL } from '../../constants/root';

import Error from '../Error';
import Characters from '../Characters';

import classes from './Comics.css';

class Comics {
  renderComics(data) {
    let htmlContent = '';

    data.forEach(({ id, title, thumbnail: { extension, path }}) => {
      if(!path.endsWith(IMAGE_NOT_AVAILABLE)) {
        const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
      
        const imgSrc = path + '/' + IMG_SIZES.fantastic + '.' + extension;
        htmlContent += `
          <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
            <h3 class="${classes.comics__name}">${title}</h3>
            <img class="img-contain ${classes.comics__img}" src="${imgSrc}">
          </li>
        `;
      }
    
    });

    const htmlWrapper = `
      <ul class="${classes.comics__list}">
        ${htmlContent}
      </ul>
    `;

    ROOT_INDEX.innerHTML = htmlWrapper;
  }

  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    
    data ? this.renderComics(data) : Error.render();
  }

  eventListener() {
    document.querySelectorAll('.comics__item').forEach(item => {
      item.addEventListener('click', (e) => {
        Characters.render(item.dataset.uri);
      });
    });

    document.addEventListener('click', e => {
      if(e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
        ROOT_MODAL.innerHTML = '';
      }
    });


    document.addEventListener('keydown', e => {
      if(e.code === 'Escape') {
        ROOT_MODAL.innerHTML = '';
      }
    });

  }
}

export default new Comics();