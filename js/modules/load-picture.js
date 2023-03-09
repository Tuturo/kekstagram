const imgUploadForm = document.querySelector('#upload-select-image');
const uploadFile = imgUploadForm.querySelector('#upload-file');
const imgOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = imgUploadForm.querySelector('#upload-cancel');

const closeModal = () => {
    imgOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadFile.value = '';
    closeButton.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', keydownCloseModal);
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
};

uploadFile.addEventListener('change', openModal);