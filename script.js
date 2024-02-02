
let leaf = document.getElementById('ASP');
let sidet = document.getElementById('sideer');
let text = document.getElementById('Text');
// let buble = document.getElementById('buble');



let tag = document.getElementById('tag');
var wid = window.innerWidth;

if (wid > 450) {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        let endf = window.scrollY.toFixed();
        tag.style.left = value * 1.5 + 'px';
        text.style.left = value * -1.5 + 'px';
        text.style.top = value * -0.2 + 'px';
        // buble.style.left = value * 1 + 'px';

    });
}
// else{
//     window.addEventListener('scroll', () => {
//         let value = window.scrollY;
//         let endf = window.scrollY.toFixed();
       


//     });
// }



    

    window.addEventListener('scroll', () =>{
        let value = window.scrollY;
        let endf = window.scrollY.toFixed;
        


        leaf.style.top = value * -1.5 + 'px';
        

        

        sidet.style.right = value * -0.75 + 'px';
        sidet.style.top = value * -0.75 + 'px';
  

})
