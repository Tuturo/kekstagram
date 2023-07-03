const imgUploadForm = document.querySelector('#upload-select-image');
const effectFieldset = imgUploadForm.querySelector('.effect-level');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectInput = imgUploadForm.querySelector('.effect-level__value');
const targetImg = imgUploadForm.querySelector('.img-upload__preview > img');

noUiSlider.create(sliderElement, {
    range: {
        min: 0,
        max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
});

let elementValue;

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    effectInput.value = unencoded[handle];

    if (elementValue === 'chrome') {
        targetImg.style.filter = `grayscale(${unencoded[handle]})`;
    } else if (elementValue === 'sepia') {
        targetImg.style.filter = `sepia(${unencoded[handle]})`;
    } else if (elementValue === 'marvin') {
        targetImg.style.filter = `invert(${unencoded[handle]}%)`;
    } else if (elementValue === 'phobos') {
        targetImg.style.filter = `blur(${unencoded[handle]}px)`
    } else if (elementValue === 'heat') {
        targetImg.style.filter = `brightness(${unencoded[handle]})`;
    };
});



const sliderUpdate = (minValue, maxValue, stepValue) => {
    sliderElement.noUiSlider.updateOptions({
        range: {
            min: minValue,
            max: maxValue,
        },
        step: stepValue,
        start: maxValue,
    });
};

const sliderHandler = (element) => {
    targetImg.style.filter = '';

    if (element.value === 'chrome') {
        effectFieldset.hidden = false;
        sliderUpdate(0, 1, 0.1);
        targetImg.style.filter = 'grayscale(1)';
    } else if (element.value === 'sepia') {
        effectFieldset.hidden = false;
        sliderUpdate(0, 1, 0.1);
        targetImg.style.filter = 'sepia(1)';
    } else if (element.value === 'marvin') {
        effectFieldset.hidden = false;
        sliderUpdate(0, 100, 1);
        targetImg.style.filter = 'invert(100%)';
    } else if (element.value === 'phobos') {
        effectFieldset.hidden = false;
        sliderUpdate(0, 3, 0.1);
        targetImg.style.filter = 'blur(3px)';
    } else if (element.value === 'heat') {
        effectFieldset.hidden = false;
        sliderUpdate(1, 3, 0.1);
        targetImg.style.filter = 'brightness(3)';
    } else if (element.value === 'none') {
        effectFieldset.hidden = true;
    };

    elementValue = element.value;
};

export { sliderHandler };