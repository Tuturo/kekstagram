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

export { getRandomInt,showAlert };