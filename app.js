function debounce(func, wait = 20, immediate = true) {
    // Executa a função apenas se um determinado tempo se passou.
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach((sliderImage) => {
        const slideInAt =
            window.scrollY + window.innerHeight - sliderImage.height / 2; // Distância até a metade da imagem
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // Distância até o final da imagem
        const isHalfShown = slideInAt > sliderImage.offsetTop; // Retorna 'true' se a metade da imagem estiver sendo exibida.
        const isNotScrolledPast = window.scrollY < imageBottom; // Retorna verdadeiro se a imagem já tiver sido ultrapassada na página.

        if (isHalfShown && isNotScrolledPast) {
            // Se a imagem estiver a ser exibida em sua metade, e também não ultrapassada, adiciona a classe com a animação de slideIn defina no CSS.
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));