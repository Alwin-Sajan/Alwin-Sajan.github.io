let leaf = document.getElementById('ASP');
let sidet = document.getElementById('sideer');
let text = document.getElementById('Text');
let tag = document.getElementById('tag');
var wid = window.innerWidth;

let bgchanger = document.getElementById('home'); // Change this to the element you want to change the background color

if (wid > 450) {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        tag.style.left = value * 1.5 + 'px';
        text.style.left = value * -1.5 + 'px';
        text.style.top = value * -0.2 + 'px';

        // Check the scroll position dynamically
        if (value < 250) {
            bgchanger.style.transition = "background-color 0.5s ease"; // Set the transition properties
            bgchanger.style.backgroundColor = "";
        } else {
            // Reset the background color if the scroll position is greater than 100
            bgchanger.style.transition = "background-color 0.5s ease"; // Set the transition properties
            bgchanger.style.backgroundColor = "black";
        }
    });
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    leaf.style.top = value * -1.5 + 'px';
    sidet.style.right = value * -0.75 + 'px';
    sidet.style.top = value * -0.75 + 'px';
});






// else{
//     window.addEventListener('scroll', () => {
//         let value = window.scrollY;
//         let endf = window.scrollY.toFixed();
       


//     });
// }

