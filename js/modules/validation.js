const imgUploadForm = document.querySelector('#upload-select-image');
const hashtagsField = imgUploadForm.querySelector('.text__hashtags');
const commentField = imgUploadForm.querySelector('.text__description');
const uploadSubmit = imgUploadForm.querySelector('#upload-submit');

const hashtagsValidation = () => {
    hashtagsField.setCustomValidity('');

    let inputText = hashtagsField.value.toLowerCase().trim();

    if (!inputText) {
        return;
    };

    let inputArray = inputText.split(/\s+/);
    
    const isStartNotHashtag = inputArray.some((item) => {
        return item[0] !== '#';
    });
    if (isStartNotHashtag) {
        hashtagsField.setCustomValidity('Хэштег должен начинаться с «#»');
    };

    const isOnlyHashtag = inputArray.some((item) => {
        return item === '#';
    });
    if (isOnlyHashtag) {
        hashtagsField.setCustomValidity('Хэштег не может состоять только из #');
    };

    const isSplitSpaceHashtag = inputArray.some((item) => {
        return item.indexOf('#', 1) >= 1;
    });
    if (isSplitSpaceHashtag) {
        hashtagsField.setCustomValidity('Хэштеги разделяются пробелами');
    };

    const isRepeatingHashtag = inputArray.some((item, index, array) => {
        return array.indexOf(item, index + 1) >= index + 1;
    });
    if (isRepeatingHashtag) {
        hashtagsField.setCustomValidity('Хэштеги не могут повторяться');
    };

    const isTooLongHashtag = inputArray.some((item) => {
        return item.length > 20;
    });
    if (isTooLongHashtag) {
        hashtagsField.setCustomValidity('Максимальная длина хэштега — 20 символов');
    };

    if (inputArray.length > 5) {
        hashtagsField.setCustomValidity('Максимум пять хэштегов');
    };

    // const regexp = /^#(?=.*[^0-9])[a-zа-яё0-9]$/i;
    // const regexp = /\p{L}/gu;
    // const regexp = /#[^\p{Alpha}\p{M}\p{Nd}\p{Pc}]/gu;
    // const regexp = /\S+/gi;
    // const isNotLettersOrNumbers = inputArray.some((item, index, array) => {
    //     // return (regexp.test(item)) ? true : false;
    //     return regexp.test(array.indexOf(item, index + 1));
    // });

    // const isNotLetters = inputArray.some((item) => {
    //     console.log(item.match(regexp));
    //     return regexp.test(item);
    // });

    // if (isNotLettersOrNumbers) {
    //     console.log(isNotLettersOrNumbers);
    //     hashtagsField.setCustomValidity('Working!');
    // };


    hashtagsField.reportValidity();
};

const onEscapeDown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  }

hashtagsField.addEventListener('input', hashtagsValidation);
