import {NEW_ARRAY} from './getDataArray.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const addPhotoPreview = (array) => {

    for (let i = 0; i <= array.length - 1; i++) {

        const {url, likes, comments} = array[i];

        let picture = template.cloneNode(true);

        picture.querySelector('.picture__img').src = url;
        picture.querySelector('.picture__likes').textContent = likes;
        picture.querySelector('.picture__comments').textContent = comments.length;

        fragment.appendChild(picture);
    };

    return fragment;
};

addPhotoPreview(NEW_ARRAY);

pictures.append(fragment);