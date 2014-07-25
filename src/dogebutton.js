var DogeContent = '<div class="symbol">Ð </div><p><span class="currency">Dogecoin</span></p>';
var DogeButtons = [].slice.call(document.querySelectorAll('.btn-dogecoin'));

DogeButtons.forEach(function(btn) {
    btn.innerHTML = DogeContent
});

function hasClass(el, classname) {
    return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(classname) > -1)
}

var closeButton = function() {
    DogeButtons.forEach(function(btn) {
        if (hasClass(btn, 'opened')) {
            btn.classList.remove('opened');
            btn.querySelector('.currency').innerHTML = 'Dogecoin';
        }
    });
}

document.addEventListener("click", function(e) {
    var el = e.target;
    if (hasClass(el, 'symbol')) {
        if (hasClass(el.parentNode, 'btn-dogecoin')) var btn = el.parentNode;
    } else {
        if (hasClass(el, 'btn-dogecoin')) var btn = e.target;
    }
    if (typeof btn === 'undefined') {
        closeButton();
    } else {
        btn.classList.add('opened');
        btn.querySelector('.currency').innerHTML = btn.getAttribute('data-address');
    }
});