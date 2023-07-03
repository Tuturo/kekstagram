import { show } from './big-picture.js';
import { showFilter } from './filter.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const addPhotoPreview = (array) => {

    // let currentArray = array.slice();

    for (let i = 0; i <= array.length - 1; i++) {

        let element = array[i];

        let picture = template.cloneNode(true);

        picture.querySelector('.picture__img').src = element.url;
        picture.querySelector('.picture__likes').textContent = element.likes;
        picture.querySelector('.picture__comments').textContent = element.comments.length;

        picture.addEventListener('click', (evt) => {
            evt.preventDefault();
            show(element);
        });

        fragment.appendChild(picture);
    };

    return fragment;
};

const renderPhotoPreview = (array) => {
    return new Promise(() => {
        addPhotoPreview(array);
        pictures.append(fragment);
    });
};

export { renderPhotoPreview };