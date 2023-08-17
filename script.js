// let text = document.getElementById('text');
let leaf = document.getElementById('ASP');
let sidet = document.getElementById('sideer');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    let endf = window.scrollY.toFixed;

    // text.style.marginTop = value + 2.5 + 'px';
    // leaf.style.scale = value *50  + 'px';
    leaf.style.top = value * -1.5 + 'px';
    // leaf.style.left = value * 2.5 + 'px';
    
    sidet.style.right = value * -0.75 + 'px';

    // hill5.style.left = value * 1.5 + 'px';
    // hill4.style.left = value * -1.5 + 'px';
    // hill1.style.bottom = `${value * 1.5}px`;

})