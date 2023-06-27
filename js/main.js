/* global _:readonly */

import { getData } from './modules/api.js';
import { renderPhotoPreview } from './modules/add-preview.js';
import { showFilter,setDefaultFilter,setRandomFilter,setDiscussedFilter } from './modules/filter.js';
import './modules/big-picture.js';
import './../nouislider/nouislider.js';
import './modules/slider.js';
import './modules/load-picture.js';
import './modules/validation.js';
import './modules/user-form.js';

getData((photos) => {
    renderPhotoPreview(photos);
    showFilter();
    setDefaultFilter(() => renderPhotoPreview(photos));
    setRandomFilter(photos, () => renderPhotoPreview());
    setDiscussedFilter(photos);
});