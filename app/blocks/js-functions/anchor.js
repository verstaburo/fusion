/* eslint-disable */
// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href
const $ = window.$;

export default function anchor() {
  $(document).on('click', '.js-anchor', function (e) {
    const target = $('#' + $(this).attr('href').split('#')[1]);

    if (target.length > 0) {
      e.preventDefault();

      setTimeout(function () {
        $('body, html').stop().animate({
          scrollTop:
            (target.offset().top + $(window).height() > $('body').height()) ?
              (target.offset().top + target.outerHeight() - $(window).height()) :
              target.offset().top,
        }, 1000, 'swing');
      }, 1);
    }
  });
}
/* eslint-disable */
