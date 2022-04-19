import togglePopup from '../utils/togglePopup';

const popups = document.querySelectorAll('.js-get-popup');
const popupsWrapper = document.querySelectorAll('.js-popup');

if (popups.length > 0 && popupsWrapper.length > 0) {
  const closePopupButtons = document.querySelectorAll('.js-close-popup');
  const bodyEl = document.body;

  togglePopup(popups, popupsWrapper, closePopupButtons, bodyEl);
}
