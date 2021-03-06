import showEl from '../utils/showEl';
import hideEl from '../utils/hideEl';

const burgerBtn = document.querySelector('.js-burger-btn');
const navContent = document.querySelector('.js-nav');
const bodyEl = document.body;

if (burgerBtn) {
  burgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();

    // eslint-disable-next-line no-unused-expressions
    JSON.parse(burgerBtn.getAttribute('aria-expanded'))
      ? hideEl(burgerBtn, navContent, bodyEl)
      : showEl(burgerBtn, navContent, bodyEl);
  });

  const handleClosure = event =>
    !navContent.contains(event.target);
    // const close = document.querySelector('.js-nav.is-active');

    // if (close) {
    //   close.addEventListener('click', () => {
    //     hideEl(burgerBtn, navContent, bodyEl);
    //   });
    // }


  window.addEventListener('click', handleClosure);
  window.addEventListener('focusin', handleClosure);
}
