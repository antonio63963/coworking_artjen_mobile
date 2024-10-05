//====  animation on scroll ===

const profitsIcons = document.querySelectorAll('.profit-card-img');
const animItemsArray = [...profitsIcons];


if (animItemsArray.length > 0) {
    document.addEventListener('scroll', animOnScroll);
}

function animOnScroll() {

    for (let i = 0; i < animItemsArray.length; i++) {
        const animItem = animItemsArray[i];

        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = getCords(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        // add class
        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {

            if (animItem.classList.contains('animNumbers') && !animItem.classList.contains('active')) {
                getIncreaseNum(0, animItem);
            }
            animItem.classList.add('active');

        } else {
            if (!animItem.classList.contains('animNumbers'))
                animItem.classList.remove('active');
        }
    }
};

animOnScroll();

function getCords(el) {
    const cords = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
        top: cords.top + scrollTop,
        left: cords.left + scrollLeft
    };
}