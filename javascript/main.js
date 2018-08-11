var offset = 300;
var buttonTop = document.getElementById('buttonTop');

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        buttonTop.classList.add('btn-show');
    } else {
        buttonTop.classList.remove('btn-show');
    }
});
