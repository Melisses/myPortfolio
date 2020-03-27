export function scrolling(e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const allSection = document.querySelectorAll('.section');
    let visibleSection = document.querySelector('.section.visible');
    let firstSection = document.querySelector('.section-greating');
    let nextSection = visibleSection.nextElementSibling;

    allSection.forEach(elem => elem.classList.remove('visible'));

    if (href != 'next') {
        let scrollTarget = document.querySelector('[data-anchor^="' + href + '"');
        scrollTarget.classList.add('visible');
    } else {
        if (nextSection != null)
            nextSection.classList.add('visible');
        else 
            firstSection.classList.add('visible');
    }

    ////////////////////for scrolling if one page/////////////////////////////////////////////

    //const topOffset = document.querySelector('.scrollto').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху 
    // const elementPosition = scrollTarget.getBoundingClientRect().top;
    // const offsetPosition = elementPosition - topOffset;

    // window.scrollBy({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    // })
}