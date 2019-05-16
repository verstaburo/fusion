/* eslint-disable */
const $ = window.$;

import Packery from 'packery';

const ajaxContainer = '.js-works-container';
let grid;

// Инициализация плагина
function packeryInit() {
  if ($(document).find('.js-work').length === 0 || undefined) return;

  grid = new Packery('.js-works', {
    itemSelector: '.js-work',
    columnWidth: '.js-work-sizer',
    percentPosition: true,
    transitionDuration: '.2s',
    horizontalOrder: false,
  });
}

// Подгрузка контента
export function worksLoad(url, container) {
  console.log(`Works url: ${url}`);
  $.ajax({
    url: url,
    method: 'get',
    dataType: 'html',
    success: function (data) {
      $(document).find(container).html(data);
      const newHTML = $(document).find(container).find('.works').html();
      $(document).find(container).html(newHTML);

      packeryInit();
    },
    error: function (xhr, status, err) {
      console.log(`XHR: ${xhr.responseText}; Status: ${status}; Error: ${err}`);
    }
  });
}

// Фильтрация
export function filterWork(element) {
  const
    button = element,
    filter = button.data('filter'),
    container = $(document).find(ajaxContainer),
    url = filter === 'all' ? container.data('url') : `${container.data('url')}?filter=${filter}`;

  $(document).find('.js-filter').removeClass('is-active');
  button.addClass('is-active');

  worksLoad(url, ajaxContainer);
}

export default function works () {
  $(document).on('click', '.js-filter', function (e) {
    if ($(document).find('.js-filter-works').length === 0 || undefined) return;

    e.preventDefault();
    filterWork($(this));
  });

  $(document).ready(function () {
    const
      pageHash = window.location.hash,
      filter = pageHash.split('#filter-')[1],
      myFilter = $(document).find(`.js-filter[data-filter="${filter}"]`),
      url = $(document).find(ajaxContainer).data('url');

    console.log(`Filter: ${filter ? filter : '-'}`);

    if (pageHash && myFilter.length > 0) {
      filterWork(myFilter);
    } else {
      worksLoad(url, ajaxContainer);
    }
  });
};
/* eslint-enable */
