import {scrolling} from './func.js';
// import '../css/app.css';
import '../scss/main.scss';

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', scrolling);
});