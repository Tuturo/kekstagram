// Найти рандомное число из диапазона включительно

const checkUniqNumber = (number) => {
    let numbersArr = [];
    let randomNumber = number;

    return () => {
        if (numbersArr.some((element) => element === randomNumber)) {
            console.log(numbersArr);
            return false;
        };

        numbersArr.push(randomNumber);
        return true;
    };
};

const getRandomInt = (min, max) => {
    if (min < 0 || max < 0) {
        return -1;
    }

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getUniqNumber() {
    let numbersArr = [];
    let randomNumber = getRandomInt(0, 25);

    return function checkUniqNumber() {

        while (numbersArr.some((element) => element === randomNumber)) {
            randomNumber = getRandomInt(0, 10);
        };

        numbersArr.push(randomNumber);

        return randomNumber;
    };
};

const getRandomArrayElement = (array) => {
    let randomNum = getRandomInt(0, array.length - 1);

    if (check(randomNum)) {
        randomNum = getRandomInt(0, array.length - 1);
    };

    return array[randomNum];
};

const getRandomUniqArrayElement = (array) => {
    let randomNum = getRandomInt(0, array.length - 1);
    let numbersArr = [];

    return () => {
        while (numbersArr.some((elem) => elem === randomNum)) {
            randomNum = getRandomInt(0, array.length - 1);
        }

        numbersArr.push(randomNum);

        return array[randomNum];
    };
};

const comparePhotos = (photoA, photoB) => {
    let rankA = photoA.comments.length;
    let rankB = photoB.comments.length;

    return rankB - rankA;
};

// Функция для проверки максимальной длины строки

const checkStrLength = (text, maxLength) => {
    return text.length <= maxLength;
};

const showAlert = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = 100;
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = 0;
    alertContainer.style.top = 0;
    alertContainer.style.right = 0;
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '30px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'red';
    
    alertContainer.textContent = message;
    
    document.body.append(alertContainer);
  
    setTimeout(() => {
      alertContainer.remove();
    }, 3000);
  }

export { getRandomInt,showAlert,getRandomArrayElement,getRandomUniqArrayElement,comparePhotos };