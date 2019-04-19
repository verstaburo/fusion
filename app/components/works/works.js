/* eslint-disable */
const $ = window.$;

import Packery from 'packery';

export default function works () {
  if ($(document).find('.js-work').length === 0 || undefined) return;

  const grid = new Packery('.js-works', {
    itemSelector: '.js-work',
    columnWidth: '.js-work-sizer',
    percentPosition: true,
    transitionDuration: '.2s',
    horizontalOrder: false,
  });

  function filterWork(element) {
    const
      button = element,
      filter = button.data('filter'),
      works = $('.js-work'),
      filteredWorks = filter === 'all' ? works : works.filter(`[data-work-type="${filter}"]`),
      otherWorks = filter === 'all' ? false : works.filter(`:not([data-work-type="${filter}"])`);

    $(document).find('.js-filter').removeClass('is-active');
    button.addClass('is-active');

    filteredWorks.show(0, function () {
      filteredWorks.removeClass('is-hidden');

      if (otherWorks) otherWorks.addClass('is-hidden');
    });

    setTimeout(function () {
      if (otherWorks) otherWorks.hide();

      grid.layout();
    }, 200);
  }

  $(document).on('click', '.js-filter', function (e) {
    if ($(document).find('.js-filter-works').length === 0 || undefined) return;

    e.preventDefault();
    filterWork($(this));
  });

  $(document).ready(function () {
    const
      pageHash = window.location.hash,
      filter = pageHash.split('#filter-')[1],
      myFilter = $(document).find(`.js-filter[data-filter="${filter}"]`);

    console.log(filter);
    console.log(myFilter);

    if (pageHash && myFilter.length > 0) {
      filterWork(myFilter);
    }
  });
};
/* eslint-enable */
