// Найти рандомное число из диапазона включительно

const getRandomInt = (min, max) => {
    if (min < 0 || max < 0) {
        return -1;
    }

    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
};


// Функция для проверки максимальной длины строки

function checkStringLength(currentString, maxLength) {

    if (currentString.length <= maxLength) {
        return true;
    } else {
        return false;
    }

}