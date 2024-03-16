const leaf = document.getElementById('ASP');
const sidet = document.getElementById('sideer');
const text = document.getElementById('Text');
const tag = document.getElementById('tag');
const bgchanger = document.getElementById('home');
const wid = window.innerWidth;

// Count the total number of animations
let animationCount = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Increment the animation count when a new animation starts
            animationCount++;
        } else {
            entry.target.classList.remove('show');
            // Decrement the animation count when an animation finishes
            animationCount--;
            // Check if all animations have finished
            if (animationCount === 0) {
                // All animations have finished, perform actions here
                console.log("All animations have finished");
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenL, .hiddenR, .hiddenB, .hiddenD, .hiddenLm');
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
    

    if (wid > 450) {
        tag.style.left = value * 1.5 + 'px';
        text.style.left = value * -1.5 + 'px';
        text.style.top = value * -0.2 + 'px';
        const value = window.scrollY;
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
