import { renderPhotoPreview } from "./add-preview.js";
import { getRandomUniqArrayElement,comparePhotos } from "./util.js";

const imgFilter = document.querySelector('.img-filters');
const buttonsForm = imgFilter.querySelector('.img-filters__form');
const defaultButton = imgFilter.querySelector('#filter-default');
const randomButton = imgFilter.querySelector('#filter-random');
const discussedButton = imgFilter.querySelector('#filter-discussed');
const picturesField = document.querySelector('.pictures');

const buttonSwitchingOn = () => {
    let buttonsArray = [
        defaultButton,
        randomButton,
        discussedButton
    ];

    buttonsForm.addEventListener('click', (evt) => {
        evt.preventDefault();

        for (let key of buttonsArray) {
            if (evt.target.id === key.id) {
                key.classList.add('img-filters__button--active');
            } else {
                key.classList.remove('img-filters__button--active');
            };
        };
    });

};

const showFilter = () => {
    return new Promise(() => {
        imgFilter.classList.remove('img-filters--inactive');
        buttonSwitchingOn();
    });
};

const RERENDER_DELAY = 500;

const setDefaultFilter = (cb) => {
    defaultButton.addEventListener('click', _.debounce(
        () => {

            let currentPictures = picturesField.querySelectorAll('.picture');
            currentPictures.forEach((elem) => {
                elem.parentNode.removeChild(elem);
            });
    
            cb();
        },
        RERENDER_DELAY,
    ));
};

const setRandomFilter = (photos) => {
    randomButton.addEventListener('click', _.debounce(
        () => {

            let currentPictures = picturesField.querySelectorAll('.picture');
            currentPictures.forEach((elem) => {
                elem.parentNode.removeChild(elem);
            });
    
            let randomChecking = getRandomUniqArrayElement(photos);
    
            let newPhotos = new Array(10).fill(null).map(() => randomChecking(photos));
    
            renderPhotoPreview(newPhotos);
        },
        RERENDER_DELAY,
    ));
};

const setDiscussedFilter = (photos) => {
    discussedButton.addEventListener('click', _.debounce(
        () => {

            let currentPictures = picturesField.querySelectorAll('.picture');
            currentPictures.forEach((elem) => {
                elem.parentNode.removeChild(elem);
            });
    
            let newPhotos = photos.slice();
            newPhotos.sort(comparePhotos);
            renderPhotoPreview(newPhotos);
    
        },
        RERENDER_DELAY,
    ));
};

export { showFilter,setDefaultFilter,setRandomFilter,setDiscussedFilter };