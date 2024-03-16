let leaf = document.getElementById('ASP');
let sidet = document.getElementById('sideer');
let text = document.getElementById('Text');
let tag = document.getElementById('tag');
let bgchanger = document.getElementById('home');
let wid = window.innerWidth;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsL = document.querySelectorAll('.hiddenL'); // Assuming 'bio' is a class
hiddenElementsL.forEach((el) => observer.observe(el));

const hiddenElementsR = document.querySelectorAll('.hiddenR'); // Assuming 'bio' is a class
hiddenElementsR.forEach((el) => observer.observe(el));

const hiddenElementsB = document.querySelectorAll('.hiddenB'); // Assuming 'bio' is a class
hiddenElementsB.forEach((el) => observer.observe(el));

const hiddenElementsD = document.querySelectorAll('.hiddenD'); // Assuming 'bio' is a class
hiddenElementsD.forEach((el) => observer.observe(el));

const hiddenElementsLm = document.querySelectorAll('.hiddenLm'); // Assuming 'bio' is a class
hiddenElementsLm.forEach((el) => observer.observe(el));

if (wid > 450) {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        tag.style.left = value * 1.5 + 'px';
        text.style.left = value * -1.5 + 'px';
        text.style.top = value * -0.2 + 'px';

        // Animation
        

        // Check the scroll position dynamically for background color change
        if (value < 250) {
            bgchanger.style.transition = "background-color 0.5s ease";
            bgchanger.style.backgroundColor = "";
        } else {
            bgchanger.style.transition = "background-color 0.5s ease";
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
