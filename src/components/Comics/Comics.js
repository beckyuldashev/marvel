import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_SIZES, IMAGE_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';
import classes from './Comics.css';
console.log(classes)

class Comics {
  async render() {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
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

  eventListener() {
    document.querySelectorAll('.comics__item').forEach(item => {
      item.addEventListener('click', (e) => {
        const uri = item.dataset.uri;
      });
    });

  }
}

export default new Comics();