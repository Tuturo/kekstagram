const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');
const body = document.querySelector('body');
const currentCount = bigPicture.querySelector('.current-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const imgUploadForm = document.querySelector('#upload-select-image');
const fileChooser = imgUploadForm.querySelector('#upload-file');
const imgPreview = imgUploadForm.querySelector('.img-upload__preview > img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');

const getComment = (item) => {

    let result = commentTemplate.cloneNode(true);
    result.querySelector('.social__picture').src = item.avatar;
    result.querySelector('.social__picture').alt = item.name;
    result.querySelector('.social__text').textContent = item.message;

    return result;
};

const renderComments = (comments) => {
    let commentNumber = 0;

    return () => {
        let commentsFragment = document.createDocumentFragment();
        let commentQuantity = 5;
        commentsLoader.classList.remove('hidden');
        currentCount.innerHTML = '';

        for (let i = 0; i <= commentQuantity - 1; i++) {
            commentsFragment.appendChild(getComment(comments[commentNumber]));
            commentNumber++;

            if (commentNumber === comments.length) {
                commentsLoader.classList.add('hidden');
                break;
            };

        };

        currentCount.textContent = commentNumber;

        return commentsList.append(commentsFragment);
    }
};

const close = () => {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
    bigPictureClose.removeEventListener('click', close);
    document.removeEventListener('keydown', closeKeydown);
    commentsList.innerHTML = '';
};

const closeKeydown = (evt) => {
    if (evt.keyCode === 27) {
        close();
    };
};

fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((key) => {
        return fileName.endsWith(key);
    });

    if (matches) {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            imgPreview.src = reader.result;
        });

        reader.readAsDataURL(file);
    };

});


const show = (picture) => {
    body.classList.add('modal-open');

    bigPicture.querySelector('.big-picture__img > img').src = picture.url;
    bigPicture.querySelector('.likes-count').textContent = picture.likes;
    bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
    let showComments = renderComments(picture.comments);
    showComments();
    commentsLoader.addEventListener('click', showComments);
    bigPicture.querySelector('.social__caption').textContent = picture.description;

    bigPictureClose.addEventListener('click', close);
    document.addEventListener('keydown', closeKeydown);
    bigPicture.classList.remove('hidden');
};


export { show };