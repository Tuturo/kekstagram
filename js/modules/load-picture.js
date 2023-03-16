import { sliderHandler } from './slider.js';

const imgUploadForm = document.querySelector('#upload-select-image');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = imgUploadForm.querySelector('#upload-cancel');
const smallerControl = imgUploadForm.querySelector('.scale__control--smaller');
const biggerControl = imgUploadForm.querySelector('.scale__control--bigger');
const controlValue = imgUploadForm.querySelector('.scale__control--value');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview');
const effectsList = imgUploadForm.querySelector('.effects__list');

const closeModal = () => {
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
    closeButton.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', keydownCloseModal);
    smallerControl.removeEventListener('click', resizeSmaller);
    biggerControl.removeEventListener('click', resizeBigger);
};

const keydownCloseModal = (evt) => {
    if (evt.keyCode === 27) {
        closeModal();
    };
};

const openModal = () => {
    imgOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    closeButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', keydownCloseModal);
    smallerControl.addEventListener('click', resizeSmaller);
    biggerControl.addEventListener('click', resizeBigger);
    effectsList.addEventListener('change', applyEffect);
};

uploadFile.addEventListener('change', openModal);

const resizeSmaller = () => {
    let currentValue = parseInt(controlValue.value);
    if (currentValue > 25) {
        currentValue -= 25;
    };

    controlValue.value = `${currentValue}%`;
    imageScale();
};

const resizeBigger = () => {
    let currentValue = parseInt(controlValue.value);
    if (currentValue < 100) {
        currentValue += 25;
    };

    controlValue.value = `${currentValue}%`;
    imageScale();
};

const imageScale = () => {
    let currentValue = parseInt(controlValue.value);
    if (currentValue != 100) {
        imgPreview.style.scale = `0.${currentValue}`;
    } else {
        imgPreview.style.scale = '';
    };
};

const applyEffect = () => {
    let effectInputs = effectsList.querySelectorAll('.effects__radio');
    let effectImg = imgPreview.querySelector('img');
    effectImg.className = '';

    for (let i = 0; i < effectInputs.length; i++) {
        if (effectInputs[i].checked) {
            effectImg.classList.add(`effects__preview--${effectInputs[i].value}`);
            sliderHandler(effectInputs[i]);
        };
    };
};

openModal();