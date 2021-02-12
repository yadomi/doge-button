const dogeClassPrefix = 'xdgbtn';

const withPrefix = className => `${dogeClassPrefix}-${className}`;
const CLASSNAMES = ['opened', 'currency', 'symbol', 'donate', 'theme-corpo', 'theme-doge'].reduce((sum, className) => {
    sum[className] = withPrefix(className)
    return sum;
}, {});

const template = (address) => `<section><div class="${CLASSNAMES.symbol}"><span></span></div><div><span class="${CLASSNAMES.currency}">Dogecoin</span></div></section><div><span></span><span>${address}</span></div>`;

function getBalance(addr, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dogechain.info/chain/Dogecoin/q/addressbalance/" + addr ,true);
    xhr.send();
    xhr.onreadystatechange =  function(){
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
            callback(xhr.responseText);
        }
    }
}

const onClick = ({ currentTarget }) => {
    if (currentTarget.classList.contains(CLASSNAMES.opened)) {
        currentTarget.classList.remove(CLASSNAMES.opened);
        return;
    }

    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(currentTarget.dataset.xdgbtnAddress)
    }

    currentTarget.classList.add(CLASSNAMES.opened);
}

(() => {
    const dogeButtons = [].slice.call(document.querySelectorAll('[data-xdgbtn-address]'));

    dogeButtons.forEach(function(btn) {
        btn.innerHTML = template(btn.dataset.xdgbtnAddress);
        btn.addEventListener('click', onClick);

        if(![...btn.classList].some(name => [CLASSNAMES['theme-doge'], CLASSNAMES['theme-corpo']].includes(name))) {
            btn.classList.add(CLASSNAMES['theme-corpo'])
        }

        if (btn.classList.contains(CLASSNAMES.donate)) {
            getBalance(btn.dataset.xdgbtnAddress, function(data){
                btn.querySelector('.' + CLASSNAMES.symbol).dataset.balance = Math.round(data).toFixed(2);
            });
        }
    });
})()