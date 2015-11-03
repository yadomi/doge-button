var DogeContent = '<div class="symbol">Ð </div><p><span class="currency">Dogecoin</span></p>';
var DogeButtons = [].slice.call(document.querySelectorAll('[data-dogecoin-button]'));

DogeButtons.forEach(function(btn) {
    btn.innerHTML = DogeContent;
    if(hasClass(btn, 'donate')){
        getBalance(btn.getAttribute('data-address'), function(data){
            btn.querySelector('.symbol').dataset.balance = Math.round(data).toFixed(2);
        });
    }
});

include('//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.5/ZeroClipboard.min.js', function(){
    ZeroClipboard.config( {
        swfPath: "//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.5/ZeroClipboard.swf" , 
        hoverClass: 'isHover'
    } );
    var clip = new ZeroClipboard(DogeButtons);
    clip.on( 'ready', function(event) {
        clip.on( 'copy', function(event) {
            event.clipboardData.setData('text/plain', event.target.dataset.address);
        } );
        clip.on( 'aftercopy', function(event) {
            event.target.className += ' copied';
        });
    } );
    clip.on( 'error', function(event) {
        ZeroClipboard.destroy();
    } );    
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

function getBalance(addr, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dogechain.info/chain/Dogecoin/q/addressbalance/"+addr ,true);
    xhr.send();
    xhr.onreadystatechange =  function(){
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
            callback(xhr.responseText);
        }
    }
}

function include(path, callback){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script)
}