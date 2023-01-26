import {getRandomInt} from './util.js';
import {MESSAGES, NAMES} from './data.js';

function getUniqNumber() {
    let numbersArr = [];
    let randomNumber = getRandomInt(1, 25);

    return function checkUniqNumber() {

        while (numbersArr.some((element) => element === randomNumber)) {
            randomNumber = getRandomInt(1, 25);
        };

        numbersArr.push(randomNumber);

        return randomNumber;
    };
};

let getId = getUniqNumber();
let getUrl = getUniqNumber();

const getSomeMessage = (data) => {
    let message = '';
    let count = getRandomInt(1, 2);

    for (let i = 1; i <= count; i++) {
        let comment = getRandomInt(0, data.length - 1);
        message += data[comment];

        if (i != count) {
            message += ' ';
        };
    };

    return message;
};

const getRandomArrayElement = (array) => {
    return array[getRandomInt(0, array.length - 1)];
};

function getComment () {
    let commentId = getUniqNumber();

    return {
        id: commentId(),
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: getSomeMessage(MESSAGES),
        name: getRandomArrayElement(NAMES),
    };
};

const getCommentsArray = () => {
    let quantity = getRandomInt(1, 5);

    return new Array(quantity).fill(null).map(() => Object.assign({}, getComment()));
};


const getObject = () => {
    return {
        id: getId(),
        url: `photos/${getUrl()}.jpg`,
        description: 'Аватар пользователя',
        likes: getRandomInt(15, 200),
        comments: getCommentsArray(),
    };
};

const NEW_ARRAY = new Array(25).fill(null).map(() => Object.assign({}, getObject()));

export {NEW_ARRAY};