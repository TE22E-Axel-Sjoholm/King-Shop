let cart = [];

function additem(itemn, itemp) {
    let item = {
        vara: itemn,
        pris: itemp
    };
    cart.push(item);
    varukorg();
}
function varukorg() {
    let cartE = document.getElementById('cart');
    cartE.innerHTML = '';
    cart.forEach(function(item) {
        let itemN = document.createElement('h4');
        let itemP = document.createElement('p');
        itemN.textContent = item.vara;
        itemP.textContent = '$' + item.pris;
        cartE.appendChild(itemN);
        cartE.appendChild(itemP);
    });
}   

function clear() {
    cart.lenght = [0];
    varukorg();
}