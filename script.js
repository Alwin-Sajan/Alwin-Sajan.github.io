const leaf = document.getElementById('ASP');
const sidet = document.getElementById('sideer');
const text = document.getElementById('Text');
const tag = document.getElementById('tag');
const bgchanger = document.getElementById('home');
const wid = window.innerWidth;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observerNew = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Norma');
        } else {
            entry.target.classList.remove('Norma');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenL, .hiddenR, .hiddenB, .hiddenD, .hiddenLm');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsN = document.querySelectorAll('.betweenWaves');
hiddenElementsN.forEach((el) => observerNew.observe(el));

window.addEventListener('scroll', () => {
    const value = window.scrollY;

    if (wid > 450) {
        tag.style.left = value * 1.5 + 'px';
        text.style.left = value * -1.5 + 'px';
        text.style.top = value * -0.2 + 'px';

        if (value < 250) {
            bgchanger.style.transition = "background-color 0.5s ease";
            bgchanger.style.backgroundColor = "";
        } else {
            bgchanger.style.transition = "background-color 0.5s ease";
            bgchanger.style.backgroundColor = "black";
        }
    }

    leaf.style.top = value * -1.5 + 'px';
    sidet.style.right = value * -0.75 + 'px';
    sidet.style.top = value * -0.75 + 'px';
});
