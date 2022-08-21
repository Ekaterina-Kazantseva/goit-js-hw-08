import SimpleLightbox from "simplelightbox";

// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
  
  // Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Описан в документации


const galleryEl = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
galleryEl.addEventListener("click", onGalleryClick);


function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a
        class="gallery__item"
        href = '${original}';>
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>`;
    })
    .join('');
}
//console.log(createImgMarkup)


function onGalleryClick(event) {
  const ImgEl = event.target;

  //изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.
  event.preventDefault();
  if (!ImgEl.classList.contains('gallery__image')) {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captions: true,
    сaptionsData: 'alt',
    captionDelay: 250,
  })
}