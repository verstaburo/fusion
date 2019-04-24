/* eslint-disable */
const
  $ = window.$,
  button = $(document).find('.js-burger-button'),
  menu = $(document).find('.js-burger-menu');

export function showBurger () {
  button.addClass('is-active');
  menu.show(0, function () {
    $(this).addClass('is-active');
  });
}

export function hideBurger () {
  button.removeClass('is-active');
  menu.removeClass('is-active');

  setTimeout(function () {
    menu.hide();
  }, globalOptions.animationDuration);
}

export default function header() {
  $(document).on('click', '.js-burger-button', function () {
    button.hasClass('is-active') ? hideBurger() : showBurger();
  });

  $(document).mouseup(function (e) {
    if (
      !menu.is(e.target)
      && !menu.has(e.target).length
      && !button.is(e.target)
      && !button.has(e.target).length) {
      hideBurger();
    }
  });
}
/* eslint-enable */
