import { sendData } from "./api.js";
import { showAlert } from "./util.js";
import { closeModal } from "./load-picture.js";

const userForm = document.querySelector('#upload-select-image');
console.log();

const userFormSubmit = (onSuccess) => {
    userForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        sendData(
            () => onSuccess(),
            () => showAlert('Не удалось отправить форму. Попробуйте ещё раз!'),
            new FormData(evt.target),
        );
    });
};

userFormSubmit(closeModal);