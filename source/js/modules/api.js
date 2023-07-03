import { showAlert } from "./util.js";

const getData = (onSuccess) => {
    fetch('https://23.javascript.pages.academy/kekstagram/data')
        .then((response) => response.json())
        .then((json) => {
            onSuccess(json);
        })
        .catch(() => {
            showAlert('Не удалось загрузить данные с сервера!');
        });
};

const sendData = (onSuccess, onFail, body) => {

    fetch('https://23.javascript.pages.academy/kekstagram', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: body,
        mode: "no-cors",
    })
    .then((response) => {
        if (response.ok) {
            onSuccess();

        } else {
            onFail('Не удалось отправить форму!');
        }
    })
    .catch(() => {
        onFail('Не удалось отправить форму!');
    });
};

export { getData,sendData };