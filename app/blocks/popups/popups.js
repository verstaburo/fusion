/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    afterClose: unfreeze,
    btnTpl: {
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.41 39.41"><line class="cls-1" x1="0.71" y1="0.71" x2="38.71" y2="38.71"/><line class="cls-1" x1="0.71" y1="38.71" x2="38.71" y2="0.71"/></svg>' +
        "</button>",
    }
  });
}
/* eslint-enable */
