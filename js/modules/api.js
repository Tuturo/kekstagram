
fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    });


const getData = (onSuccess) => {
    fetch('https://23.javascript.pages.academy/kekstagram/data')
        .then((response) => response.json())
        .then((json) => {
            onSuccess(json);
        });
};

export { getData };