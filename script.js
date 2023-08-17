
let leaf = document.getElementById('ASP');
let sidet = document.getElementById('sideer');





    window.addEventListener('scroll', () =>{
        let value = window.scrollY;
        let endf = window.scrollY.toFixed;

        leaf.style.top = value * -1.5 + 'px';


        sidet.style.right = value * -0.75 + 'px';
        sidet.style.top = value * -0.75 + 'px';
  

})
