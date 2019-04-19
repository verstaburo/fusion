/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import popups from '../blocks/popups/popups';
import works from '../components/works/works';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  popups();
  works();
});
/* eslint-enable */
