import {scrolling} from './func.js';
// import '../css/app.css';
import '../scss/main.scss';

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', scrolling);
});

document.querySelectorAll('.article__img').forEach(img => {
    img.addEventListener('mouseover', () => {
        console.log(this);
        this.classList.add('img_hover');
    });
    img.addEventListener('mouseout', function(e) {
        this.classList.remove('img_hover');
    });
});

// let btnRoad = document.querySelector('.btn_road');
// console.log(btnRoad)
// btnRoad.addEventListener('click', function() {
//     let visibleSection = document.querySelector('.section.visible');
//     let nextSection = visibleSection.nextElementSibling;
//     let firstSection = document.querySelector('.section-greating');

//     visibleSection.classList.remove('visible');
//     if (nextSection != null)
//         nextSection.classList.add('visible');
//     else 
//         firstSection.classList.add('visible');
// })

const wrapper = document.querySelector(".article-greating");
let text = document.querySelector(".article__paragraph");
let textCont = text.textContent;
text.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
    setTimeout(() => {
        // Created textNode to append
        let texts = document.createTextNode(textCont[i])
        let span = document.createElement('span');
        span.appendChild(texts);
  
        span.classList.add('text__color');
        wrapper.appendChild(span);
      }, 75 * i);
}